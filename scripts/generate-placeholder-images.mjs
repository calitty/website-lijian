import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const imageDir = path.join(root, "public", "images");
fs.mkdirSync(imageDir, { recursive: true });

function crc32(buf) {
  const table = crc32.table || (crc32.table = new Uint32Array(256).map((_, n) => {
    let c = n;
    for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    return c >>> 0;
  }));
  let c = 0xffffffff;
  for (const b of buf) c = table[(c ^ b) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuf = Buffer.from(type);
  const len = Buffer.alloc(4);
  const crc = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([len, typeBuf, data, crc]);
}

function encodePng(width, height, rgba) {
  const raw = Buffer.alloc((width * 4 + 1) * height);
  for (let y = 0; y < height; y += 1) {
    const row = y * (width * 4 + 1);
    raw[row] = 0;
    rgba.copy(raw, row + 1, y * width * 4, (y + 1) * width * 4);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk("IHDR", ihdr),
    chunk("IDAT", zlib.deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

function canvas(width, height, bg) {
  const rgba = Buffer.alloc(width * height * 4);
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const i = (y * width + x) * 4;
      const gx = x / width;
      const gy = y / height;
      const noise = ((x * 13 + y * 17) % 23) - 11;
      rgba[i] = clamp(bg[0] + gx * bg[3] + noise * 0.4);
      rgba[i + 1] = clamp(bg[1] + gy * bg[4] + noise * 0.35);
      rgba[i + 2] = clamp(bg[2] + (1 - gx) * bg[5] + noise * 0.35);
      rgba[i + 3] = 255;
    }
  }
  return { width, height, rgba };
}

function clamp(value) {
  return Math.max(0, Math.min(255, Math.round(value)));
}

function blend(c, x, y, color, alpha = 1) {
  x = Math.round(x);
  y = Math.round(y);
  if (x < 0 || y < 0 || x >= c.width || y >= c.height) return;
  const i = (y * c.width + x) * 4;
  const a = Math.max(0, Math.min(1, alpha));
  c.rgba[i] = clamp(c.rgba[i] * (1 - a) + color[0] * a);
  c.rgba[i + 1] = clamp(c.rgba[i + 1] * (1 - a) + color[1] * a);
  c.rgba[i + 2] = clamp(c.rgba[i + 2] * (1 - a) + color[2] * a);
}

function rect(c, x, y, w, h, color, alpha = 1) {
  for (let yy = Math.max(0, Math.floor(y)); yy < Math.min(c.height, y + h); yy += 1) {
    for (let xx = Math.max(0, Math.floor(x)); xx < Math.min(c.width, x + w); xx += 1) {
      blend(c, xx, yy, color, alpha);
    }
  }
}

function line(c, x0, y0, x1, y1, color, alpha = 1, width = 1) {
  const dx = x1 - x0;
  const dy = y1 - y0;
  const steps = Math.max(Math.abs(dx), Math.abs(dy));
  for (let i = 0; i <= steps; i += 1) {
    const t = i / steps;
    const x = x0 + dx * t;
    const y = y0 + dy * t;
    for (let yy = -width; yy <= width; yy += 1) {
      for (let xx = -width; xx <= width; xx += 1) {
        const falloff = 1 - Math.min(0.75, Math.hypot(xx, yy) / (width + 1));
        blend(c, x + xx, y + yy, color, alpha * falloff);
      }
    }
  }
}

function blade(c, cx, cy, len, halfW, angle, tint = 0) {
  const ca = Math.cos(angle);
  const sa = Math.sin(angle);
  const minX = Math.max(0, Math.floor(cx - Math.abs(ca) * len / 2 - Math.abs(sa) * halfW * 3 - 24));
  const maxX = Math.min(c.width, Math.ceil(cx + Math.abs(ca) * len / 2 + Math.abs(sa) * halfW * 3 + 24));
  const minY = Math.max(0, Math.floor(cy - Math.abs(sa) * len / 2 - Math.abs(ca) * halfW * 3 - 24));
  const maxY = Math.min(c.height, Math.ceil(cy + Math.abs(sa) * len / 2 + Math.abs(ca) * halfW * 3 + 24));

  for (let y = minY; y < maxY; y += 1) {
    for (let x = minX; x < maxX; x += 1) {
      const dx = x - cx;
      const dy = y - cy;
      const lx = dx * ca + dy * sa;
      const ly = -dx * sa + dy * ca;
      if (lx < -len / 2 || lx > len / 2) continue;
      const end = Math.min(1, Math.max(0.2, (len / 2 - Math.abs(lx)) / 70));
      const tip = lx > len / 2 - 130 ? Math.max(0, (len / 2 - lx) / 130) : 1;
      const back = lx < -len / 2 + 80 ? Math.max(0.55, (lx + len / 2) / 80) : 1;
      const maxW = halfW * Math.min(end * 1.45, tip, back);
      if (Math.abs(ly) > maxW) continue;
      const edge = 1 - Math.min(1, (maxW - Math.abs(ly)) / 5);
      const shine = Math.max(0, 1 - Math.abs(ly + halfW * 0.2) / (halfW * 0.18));
      const shade = 160 + 45 * (lx / len + 0.5) + 34 * shine - 34 * edge + tint;
      blend(c, x, y, [shade, shade + 6, shade + 13], 0.96);
      if (Math.abs(ly) > maxW - 2.2) blend(c, x, y, [244, 247, 250], 0.55);
    }
  }

  for (const holeX of [-len * 0.22, len * 0.08]) {
    for (let yy = -16; yy <= 16; yy += 1) {
      for (let xx = -16; xx <= 16; xx += 1) {
        if (xx * xx + yy * yy < 16 * 16) {
          const x = cx + (holeX + xx) * ca - yy * sa;
          const y = cy + (holeX + xx) * sa + yy * ca;
          blend(c, x, y, [33, 39, 46], 0.78);
        }
      }
    }
  }
}

function circularBlade(c, cx, cy, outerR, innerR, colorTint = 0) {
  for (let y = Math.floor(cy - outerR - 6); y <= cy + outerR + 6; y += 1) {
    for (let x = Math.floor(cx - outerR - 6); x <= cx + outerR + 6; x += 1) {
      const d = Math.hypot(x - cx, y - cy);
      if (d > outerR || d < innerR) continue;
      const edge = Math.min(Math.abs(d - outerR), Math.abs(d - innerR));
      const shine = Math.max(0, 1 - Math.abs((y - cy) / outerR + 0.35));
      const shade = 158 + colorTint + shine * 42 - Math.max(0, 6 - edge) * 7;
      blend(c, x, y, [shade, shade + 6, shade + 12], 0.96);
    }
  }
  for (let i = 0; i < 6; i += 1) {
    const a = (Math.PI * 2 * i) / 6;
    const hx = cx + Math.cos(a) * outerR * 0.5;
    const hy = cy + Math.sin(a) * outerR * 0.5;
    for (let yy = -9; yy <= 9; yy += 1) {
      for (let xx = -9; xx <= 9; xx += 1) {
        if (xx * xx + yy * yy < 9 * 9) blend(c, hx + xx, hy + yy, [38, 45, 52], 0.75);
      }
    }
  }
}

function serratedBlade(c, cx, cy, len, halfW, angle, tint = 0) {
  blade(c, cx, cy, len, halfW, angle, tint);
  const ca = Math.cos(angle);
  const sa = Math.sin(angle);
  for (let i = 0; i < 26; i += 1) {
    const lx = -len * 0.42 + i * (len * 0.84 / 25);
    const tooth = i % 2 === 0 ? 8 : 3;
    const x = cx + lx * ca - (halfW + tooth) * sa;
    const y = cy + lx * sa + (halfW + tooth) * ca;
    line(c, x, y, x + 10 * ca, y + 10 * sa, [245, 248, 250], 0.7, 1);
  }
}

function makeProductCanvas(bg = [232, 236, 240, -25, -20, -10]) {
  const c = canvas(1200, 900, bg);
  rect(c, 0, 620, 1200, 280, [204, 212, 220], 0.68);
  for (let i = 0; i < 18; i += 1) line(c, 120 + i * 70, 120, 360 + i * 70, 820, [85, 96, 106], 0.08, 1);
  rect(c, 80, 680, 1040, 34, [82, 91, 100], 0.2);
  return c;
}

function productCustom() {
  const c = makeProductCanvas([222, 227, 232, -18, -16, -8]);
  blade(c, 610, 510, 720, 38, -0.16, 12);
  blade(c, 690, 650, 530, 30, 0.17, 5);
  circularBlade(c, 310, 420, 118, 32, 6);
  return c;
}

function productCurved() {
  const c = makeProductCanvas([224, 229, 233, -20, -18, -10]);
  blade(c, 620, 520, 760, 42, -0.26, 16);
  blade(c, 720, 650, 560, 34, 0.24, 6);
  line(c, 390, 560, 850, 480, [246, 249, 252], 0.32, 3);
  return c;
}

function productBowl() {
  const c = makeProductCanvas([219, 224, 229, -20, -14, -8]);
  blade(c, 600, 520, 700, 44, -0.12, 16);
  blade(c, 610, 650, 650, 42, 0.1, 8);
  blade(c, 620, 390, 600, 36, 0.18, 4);
  return c;
}

function productMeat() {
  const c = makeProductCanvas([228, 231, 234, -16, -18, -12]);
  blade(c, 610, 520, 720, 34, -0.07, 10);
  blade(c, 700, 640, 520, 28, 0.22, 0);
  rect(c, 170, 250, 180, 130, [31, 78, 121], 0.15);
  return c;
}

function productPoultry() {
  const c = makeProductCanvas([230, 234, 236, -20, -16, -12]);
  blade(c, 520, 470, 430, 25, -0.5, 8);
  blade(c, 670, 545, 420, 24, 0.45, 10);
  blade(c, 760, 645, 410, 24, -0.2, 0);
  return c;
}

function productSeafood() {
  const c = makeProductCanvas([218, 230, 235, -14, -8, 5]);
  blade(c, 610, 520, 670, 30, -0.12, 18);
  circularBlade(c, 840, 420, 95, 28, 10);
  line(c, 180, 735, 1080, 720, [46, 105, 125], 0.18, 3);
  return c;
}

function productVegetable() {
  const c = makeProductCanvas([230, 236, 232, -20, -8, -10]);
  circularBlade(c, 430, 520, 130, 30, 12);
  circularBlade(c, 650, 500, 110, 24, 4);
  blade(c, 805, 610, 410, 24, -0.24, 0);
  return c;
}

function productBakery() {
  const c = makeProductCanvas([232, 231, 226, -18, -16, -12]);
  serratedBlade(c, 610, 520, 720, 30, -0.05, 8);
  serratedBlade(c, 670, 650, 520, 24, 0.18, 0);
  return c;
}

function productPackaging() {
  const c = makeProductCanvas([232, 235, 238, -20, -20, -12]);
  serratedBlade(c, 620, 480, 760, 28, -0.08, 6);
  blade(c, 680, 630, 560, 24, 0.15, 0);
  for (let i = 0; i < 18; i += 1) line(c, 250 + i * 38, 380, 256 + i * 38, 398, [42, 49, 56], 0.45, 1);
  return c;
}

function productCircular() {
  const c = makeProductCanvas([225, 229, 233, -18, -18, -8]);
  circularBlade(c, 450, 520, 150, 38, 12);
  circularBlade(c, 700, 500, 128, 32, 4);
  circularBlade(c, 880, 565, 92, 22, 0);
  return c;
}

function productStraight() {
  const c = makeProductCanvas([229, 232, 235, -18, -20, -12]);
  blade(c, 610, 510, 820, 34, 0, 10);
  blade(c, 620, 650, 700, 28, 0.02, 0);
  return c;
}

function productSerrated() {
  const c = makeProductCanvas([227, 231, 235, -20, -20, -10]);
  serratedBlade(c, 610, 510, 780, 32, -0.04, 10);
  serratedBlade(c, 690, 650, 560, 24, 0.18, 0);
  return c;
}

function hero() {
  const c = canvas(1400, 900, [20, 23, 28, 16, 24, 32]);
  for (let y = 620; y < c.height; y += 1) rect(c, 0, y, c.width, 1, [28, 33, 38], 0.45);
  for (let i = 0; i < 22; i += 1) line(c, 520 + i * 38, 165, 900 + i * 42, 820, [86, 98, 108], 0.09, 1);
  blade(c, 870, 515, 720, 38, -0.22, 18);
  blade(c, 950, 360, 650, 30, 0.1, 8);
  blade(c, 850, 675, 600, 34, -0.02, -4);
  blade(c, 1110, 575, 470, 26, 0.38, 0);
  for (let x = 0; x < c.width * 0.48; x += 1) {
    for (let y = 0; y < c.height; y += 1) blend(c, x, y, [15, 18, 22], 0.22 * (1 - x / (c.width * 0.48)));
  }
  return c;
}

function manufacturing() {
  const c = canvas(1200, 900, [225, 229, 232, -28, -20, -10]);
  rect(c, 0, 610, 1200, 290, [188, 197, 205], 0.62);
  rect(c, 650, 90, 360, 420, [40, 54, 66], 0.9);
  rect(c, 690, 130, 280, 250, [72, 89, 102], 0.86);
  rect(c, 722, 172, 215, 82, [31, 78, 121], 0.68);
  line(c, 760, 385, 655, 575, [80, 88, 96], 0.9, 8);
  blade(c, 560, 620, 570, 34, -0.16, 12);
  rect(c, 250, 690, 760, 36, [76, 84, 92], 0.72);
  for (let i = 0; i < 12; i += 1) line(c, 260 + i * 60, 720, 335 + i * 60, 725, [42, 48, 54], 0.35, 1);
  return c;
}

function quality() {
  const c = canvas(1200, 900, [236, 239, 241, -20, -18, -12]);
  rect(c, 0, 560, 1200, 340, [212, 218, 224], 0.8);
  blade(c, 565, 560, 620, 36, 0.08, 10);
  blade(c, 710, 680, 470, 26, -0.28, 0);
  line(c, 310, 390, 790, 390, [35, 42, 50], 0.9, 6);
  line(c, 320, 390, 260, 590, [35, 42, 50], 0.9, 5);
  line(c, 780, 390, 850, 610, [35, 42, 50], 0.9, 5);
  line(c, 260, 590, 360, 610, [35, 42, 50], 0.9, 4);
  line(c, 850, 610, 760, 622, [35, 42, 50], 0.9, 4);
  rect(c, 130, 135, 230, 140, [31, 78, 121], 0.78);
  rect(c, 170, 175, 150, 60, [245, 247, 249], 0.85);
  for (let i = 0; i < 8; i += 1) line(c, 180, 190 + i * 6, 300, 190 + i * 6, [80, 96, 110], 0.4, 1);
  return c;
}

for (const [file, image] of [
  ["hero-blades.png", hero()],
  ["manufacturing-blades.png", manufacturing()],
  ["quality-inspection.png", quality()],
  ["product-custom-blades.png", productCustom()],
  ["product-curved-blades.png", productCurved()],
  ["product-bowl-cutter-blades.png", productBowl()],
  ["product-meat-processing-blades.png", productMeat()],
  ["product-poultry-knives.png", productPoultry()],
  ["product-seafood-blades.png", productSeafood()],
  ["product-vegetable-blades.png", productVegetable()],
  ["product-bakery-blades.png", productBakery()],
  ["product-packaging-blades.png", productPackaging()],
  ["product-circular-blades.png", productCircular()],
  ["product-straight-blades.png", productStraight()],
  ["product-serrated-blades.png", productSerrated()],
]) {
  fs.writeFileSync(path.join(imageDir, file), encodePng(image.width, image.height, image.rgba));
  console.log(path.join("public", "images", file));
}

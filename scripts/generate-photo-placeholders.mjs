import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const imageDir = path.join(root, "public", "images");
const placeholderDir = path.join(imageDir, "placeholders");

const source = {
  factoryCnc: path.join(placeholderDir, "factory-cnc.jpg"),
  cncCoolant: path.join(placeholderDir, "pexels-cnc-coolant.jpg"),
  cncMilling: path.join(placeholderDir, "pexels-cnc-milling.jpg"),
  cncWorkshop: path.join(placeholderDir, "pexels-cnc-workshop.jpg"),
  drillCoolant: path.join(placeholderDir, "pexels-drill-coolant.jpg"),
  sawFactory: path.join(placeholderDir, "saw-blade-factory.jpg"),
  sawIndustrial: path.join(placeholderDir, "saw-blade-industrial.jpg"),
  unsplashSawClose: path.join(placeholderDir, "unsplash-saw-blade-close.jpg"),
  slicer: path.join(placeholderDir, "unsplash-slicer-berkel.jpg"),
  kitchenSteam: path.join(placeholderDir, "unsplash-industrial-kitchen-steam.jpg"),
  knifeBlack: path.join(placeholderDir, "unsplash-knife-black-surface.jpg"),
};

await fs.mkdir(placeholderDir, { recursive: true });

function shadeOverlay(width, height, tone = "soft") {
  const opacity = tone === "hero" ? 0.66 : 0.18;
  return Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#0f172a" stop-opacity="${opacity}"/>
          <stop offset=".56" stop-color="#0f172a" stop-opacity="${tone === "hero" ? 0.38 : 0.08}"/>
          <stop offset="1" stop-color="#ffffff" stop-opacity="${tone === "hero" ? 0.02 : 0.06}"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
    </svg>
  `);
}

async function normalizePhoto(input, output, width, height, options = {}) {
  const { position = "center", tone = "soft", brightness = 0.95, saturation = 0.9, extract } = options;

  let image = sharp(input).rotate();
  if (extract) image = image.extract(extract);
  await image
    .resize(width, height, { fit: "cover", position })
    .modulate({ brightness, saturation })
    .composite([{ input: shadeOverlay(width, height, tone), blend: "over" }])
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(output);
  console.log(path.relative(root, output));
}

async function productPhoto(input, output, options = {}) {
  const { position = "center", brightness = 0.96, saturation = 0.86, extract } = options;

  let image = sharp(input).rotate();
  if (extract) image = image.extract(extract);
  await image
    .resize(1200, 900, { fit: "cover", position })
    .modulate({ brightness, saturation })
    .sharpen({ sigma: 0.7, m1: 0.55, m2: 0.25 })
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(output);
  console.log(path.relative(root, output));
}

await Promise.all([
  normalizePhoto(source.cncCoolant, path.join(placeholderDir, "photo-hero-factory.jpg"), 1600, 1000, {
    position: "left",
    tone: "hero",
    brightness: 0.74,
    saturation: 0.82,
  }),
  normalizePhoto(source.factoryCnc, path.join(placeholderDir, "photo-manufacturing-cnc.jpg"), 1200, 900, {
    position: "center",
    brightness: 0.94,
    saturation: 0.9,
  }),
  normalizePhoto(source.drillCoolant, path.join(placeholderDir, "photo-quality-inspection.jpg"), 1200, 900, {
    position: "center",
    brightness: 0.9,
    saturation: 0.84,
  }),
  normalizePhoto(source.cncWorkshop, path.join(placeholderDir, "about-workshop-machining.jpg"), 1200, 900, {
    position: "center",
    brightness: 0.88,
    saturation: 0.82,
  }),
  normalizePhoto(source.kitchenSteam, path.join(placeholderDir, "about-food-workshop-environment.jpg"), 1200, 900, {
    position: "center",
    brightness: 0.86,
    saturation: 0.78,
  }),
  normalizePhoto(source.slicer, path.join(placeholderDir, "about-equipment-slicer.jpg"), 1200, 900, {
    position: "right",
    brightness: 0.9,
    saturation: 0.78,
    extract: { left: 520, top: 150, width: 1180, height: 885 },
  }),
]);

await Promise.all([
  productPhoto(source.cncMilling, path.join(placeholderDir, "product-photo-custom-blades.jpg"), {
    position: "center",
    brightness: 0.98,
  }),
  productPhoto(source.knifeBlack, path.join(placeholderDir, "product-photo-curved-blades.jpg"), {
    position: "center",
    brightness: 1.06,
  }),
  productPhoto(source.slicer, path.join(placeholderDir, "product-photo-bowl-cutter-blades.jpg"), {
    position: "right",
    brightness: 0.95,
    saturation: 0.78,
    extract: { left: 520, top: 150, width: 1180, height: 885 },
  }),
  productPhoto(source.slicer, path.join(placeholderDir, "product-photo-meat-processing-blades.jpg"), {
    position: "right",
    brightness: 0.96,
    saturation: 0.78,
    extract: { left: 520, top: 150, width: 1180, height: 885 },
  }),
  productPhoto(source.knifeBlack, path.join(placeholderDir, "product-photo-poultry-knives.jpg"), {
    position: "center",
    brightness: 1.02,
  }),
  productPhoto(source.drillCoolant, path.join(placeholderDir, "product-photo-seafood-blades.jpg"), {
    position: "center",
    brightness: 0.94,
  }),
  productPhoto(source.knifeBlack, path.join(placeholderDir, "product-photo-vegetable-blades.jpg"), {
    position: "center",
    brightness: 1.02,
  }),
  productPhoto(source.unsplashSawClose, path.join(placeholderDir, "product-photo-bakery-blades.jpg"), {
    position: "left",
    brightness: 1,
  }),
  productPhoto(source.sawIndustrial, path.join(placeholderDir, "product-photo-packaging-blades.jpg"), {
    position: "center",
    brightness: 1.02,
    saturation: 0.74,
  }),
  productPhoto(source.sawFactory, path.join(placeholderDir, "product-photo-circular-blades.jpg"), {
    position: "center",
    brightness: 1.04,
    saturation: 0.72,
  }),
  productPhoto(source.knifeBlack, path.join(placeholderDir, "product-photo-straight-blades.jpg"), {
    position: "center",
    brightness: 1.04,
  }),
  productPhoto(source.unsplashSawClose, path.join(placeholderDir, "product-photo-serrated-blades.jpg"), {
    position: "left",
    brightness: 1,
  }),
]);

const applicationDir = path.join(placeholderDir, "applications");
await fs.mkdir(applicationDir, { recursive: true });

await Promise.all([
  productPhoto(source.slicer, path.join(applicationDir, "application-meat-processing.jpg"), {
    position: "right",
    brightness: 0.96,
    saturation: 0.78,
    extract: { left: 520, top: 150, width: 1180, height: 885 },
  }),
  productPhoto(source.knifeBlack, path.join(applicationDir, "application-poultry-processing.jpg"), {
    position: "center",
    brightness: 1.04,
  }),
  productPhoto(source.kitchenSteam, path.join(applicationDir, "application-seafood-processing.jpg"), {
    position: "center",
    brightness: 0.92,
    saturation: 0.76,
  }),
  productPhoto(source.slicer, path.join(applicationDir, "application-frozen-food-processing.jpg"), {
    position: "right",
    brightness: 0.92,
    saturation: 0.76,
    extract: { left: 520, top: 150, width: 1180, height: 885 },
  }),
  productPhoto(source.knifeBlack, path.join(applicationDir, "application-vegetable-fruit-processing.jpg"), {
    position: "center",
    brightness: 1.02,
  }),
  productPhoto(source.unsplashSawClose, path.join(applicationDir, "application-bakery-snack-processing.jpg"), {
    position: "left",
    brightness: 1,
  }),
  productPhoto(source.sawIndustrial, path.join(applicationDir, "application-food-packaging.jpg"), {
    position: "center",
    brightness: 1.03,
    saturation: 0.74,
  }),
]);

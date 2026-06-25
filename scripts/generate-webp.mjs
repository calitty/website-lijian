// Generate .webp siblings for every raster image under public/images.
// Safe to re-run; only (re)writes when the source is newer than the .webp.
// The <Img> component falls back to the original file, so a missing .webp
// never breaks rendering.
import { readdir, stat } from "node:fs/promises";
import { join, extname } from "node:path";
import sharp from "sharp";

const ROOT = new URL("../public/images/", import.meta.url).pathname;
const EXT = new Set([".jpg", ".jpeg", ".png"]);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (EXT.has(extname(entry.name).toLowerCase())) yield full;
  }
}

let made = 0;
let skipped = 0;
for await (const file of walk(ROOT)) {
  const out = file.replace(/\.(jpe?g|png)$/i, ".webp");
  const srcStat = await stat(file);
  let fresh = false;
  try {
    const outStat = await stat(out);
    fresh = outStat.mtimeMs >= srcStat.mtimeMs;
  } catch {
    fresh = false;
  }
  if (fresh) {
    skipped++;
    continue;
  }
  await sharp(file).webp({ quality: 78, effort: 4 }).toFile(out);
  made++;
  console.log("webp:", out.replace(ROOT, ""));
}
console.log(`\nDone. ${made} generated, ${skipped} up-to-date.`);

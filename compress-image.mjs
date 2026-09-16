// scripts/compress-image.mjs
import sharp from "sharp";

const [, , inputPath, outputPath] = process.argv;

if (!inputPath || !outputPath) {
  console.error("Usage: node scripts/compress-image.mjs <input> <output>");
  process.exit(1);
}

await sharp(inputPath)
  .resize(260, 260, {
    fit: "cover",       // crops to fill the square, like object-fit: cover
    position: "attention" // sharp tries to keep the most "interesting" part of the image in frame — usually a face
  })
  .webp({ quality: 80 })
  .toFile(outputPath);

console.log(`Done → ${outputPath}`);
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = path.resolve('public/images');
const files = fs.readdirSync(imagesDir).filter(f => /\.(jpg|jpeg|png)$/i.test(f));

console.log(`Found ${files.length} images in ${imagesDir}`);

async function compressFile(filePath) {
  const originalSize = fs.statSync(filePath).size;
  const tempPath = filePath + '.tmp';

  await sharp(filePath)
    .jpeg({ quality: 82, progressive: true, mozjpeg: true })
    .toFile(tempPath);

  const newSize = fs.statSync(tempPath).size;
  if (newSize < originalSize) {
    fs.renameSync(tempPath, filePath);
    console.log(`Compressed ${path.basename(filePath)}: ${(originalSize / 1024).toFixed(1)} KB -> ${(newSize / 1024).toFixed(1)} KB (${Math.round((1 - newSize / originalSize) * 100)}% saved)`);
  } else {
    fs.unlinkSync(tempPath);
    console.log(`Skipped ${path.basename(filePath)} (already optimal)`);
  }
}

async function main() {
  for (const file of files) {
    await compressFile(path.join(imagesDir, file));
  }

  // Also compress og-image.jpg
  const ogImage = path.resolve('public/og-image.jpg');
  if (fs.existsSync(ogImage)) {
    await compressFile(ogImage);
  }
}

main().catch(err => {
  console.error('Compression failed:', err);
  process.exit(1);
});

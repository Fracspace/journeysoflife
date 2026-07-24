const { Jimp } = require('jimp');
const path = require('path');
const fs = require('fs');

async function main() {
  const imgPath = 'C:\\Users\\vishn\\.gemini\\antigravity-ide\\brain\\97bd031c-303f-4d4a-8928-67557e9de225\\media__1784883248131.png';
  
  if (!fs.existsSync(imgPath)) {
    console.error(`Source logo file not found at: ${imgPath}`);
    process.exit(1);
  }

  console.log(`Reading logo from ${imgPath}...`);
  const image = await Jimp.read(imgPath);
  const width = image.width;
  const height = image.height;

  // Create a new transparent image of the same size
  const output = new Jimp({ width, height, color: 0x00000000 });

  console.log("Processing pixels...");
  let removedCount = 0;
  let keptCount = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pixel = image.getPixelColor(x, y);
      const r = (pixel >> 24) & 0xff;
      const g = (pixel >> 16) & 0xff;
      const b = (pixel >> 8) & 0xff;
      const a = pixel & 0xff;

      if (a === 0) {
        output.setPixelColor(0x00000000, x, y);
        removedCount++;
        continue;
      }

      // Checkerboard detection:
      // White squares are around (240-255, 240-255, 240-255)
      // Grey squares are around (190-210, 190-210, 190-210)
      // They are highly grayscale (R, G, B are very close) and generally bright.
      const isGrayscale = Math.abs(r - g) < 15 && Math.abs(g - b) < 15 && Math.abs(r - b) < 15;
      
      let isBackground = false;
      if (isGrayscale) {
        const avg = (r + g + b) / 3;
        if (avg > 185) { // Threshold for background
          isBackground = true;
        }
      }

      if (isBackground) {
        output.setPixelColor(0x00000000, x, y);
        removedCount++;
      } else {
        // Keep original pixel (fully opaque)
        const cleanPixel = (r << 24) | (g << 16) | (b << 8) | 0xff;
        output.setPixelColor(cleanPixel, x, y);
        keptCount++;
      }
    }
  }

  console.log(`Processed: Kept ${keptCount} pixels, Removed ${removedCount} background pixels.`);

  // Find the bounding box of non-transparent pixels
  let minX = width, maxX = 0, minY = height, maxY = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pixel = output.getPixelColor(x, y);
      const a = pixel & 0xff;
      if (a > 0) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  console.log(`Bounding Box: X: ${minX}..${maxX}, Y: ${minY}..${maxY}`);
  
  if (maxX >= minX && maxY >= minY) {
    const pad = 10;
    let cropX = Math.max(0, minX - pad);
    let cropY = Math.max(0, minY - pad);
    let cropW = Math.min(width - cropX, (maxX - minX) + pad * 2);
    let cropH = Math.min(height - cropY, (maxY - minY) + pad * 2);

    console.log(`Cropping logo: ${cropW}x${cropH} at (${cropX}, ${cropY})`);
    output.crop({ x: cropX, y: cropY, w: cropW, h: cropH });
  }

  const targetPath = path.join(__dirname, 'public', 'logo.png');
  await output.write(targetPath);
  console.log(`Saved transparent logo to ${targetPath}`);
}

main().catch(console.error);

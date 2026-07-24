const { Jimp } = require('jimp');
const path = require('path');
const fs = require('fs');

async function main() {
  const imgPath = 'C:\\Users\\vishn\\.gemini\\antigravity-ide\\brain\\97bd031c-303f-4d4a-8928-67557e9de225\\media__1784883535972.jpg';
  
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

  console.log("Processing pixels with refined thresholds...");
  let backgroundCount = 0;
  let goldCount = 0;
  let textCount = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pixel = image.getPixelColor(x, y);
      const r = (pixel >> 24) & 0xff;
      const g = (pixel >> 16) & 0xff;
      const b = (pixel >> 8) & 0xff;

      // Refined thresholds:
      // 1. Pure or near-pure black background
      const isBackground = r < 10 && g < 10 && b < 10;
      
      // 2. Gold logo & film strip (distinctly reddish-yellowish-brown, high red value)
      const isGold = r > 100 && r > g && g > b;

      if (isBackground) {
        output.setPixelColor(0x00000000, x, y);
        backgroundCount++;
      } else if (isGold) {
        // Keep gold exactly as is
        const cleanPixel = ((r << 24) | (g << 16) | (b << 8) | 0xff) >>> 0;
        output.setPixelColor(cleanPixel, x, y);
        goldCount++;
      } else {
        // This is the text or line borders (very dark gray/charcoal)
        // Make it solid charcoal (#2A241F) to be super clear on cream background
        const charcoalPixel = 0x2A241FFF;
        output.setPixelColor(charcoalPixel, x, y);
        textCount++;
      }
    }
  }

  console.log(`Processed: Background: ${backgroundCount}, Gold: ${goldCount}, Text: ${textCount}`);

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

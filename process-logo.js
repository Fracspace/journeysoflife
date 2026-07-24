const { Jimp } = require('jimp');
const path = require('path');
const fs = require('fs');

async function main() {
  const imgPath = 'C:\\Users\\vishn\\.gemini\\antigravity-ide\\brain\\c4a4eb9e-53f4-43ec-8a2e-d3d37709857a\\media__1784807866294.jpg';
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

      // Checkerboard detection:
      // White squares are around (240-255, 240-255, 240-255)
      // Grey squares are around (200-206, 200-206, 200-206)
      // They are highly grayscale (R, G, B are very close) and generally bright.
      const isGrayscale = Math.abs(r - g) < 15 && Math.abs(g - b) < 15 && Math.abs(r - b) < 15;
      
      let isBackground = false;
      if (isGrayscale) {
        const avg = (r + g + b) / 3;
        if (avg > 170) {
          isBackground = true;
        }
      }

      if (isBackground) {
        output.setPixelColor(0x00000000, x, y);
        removedCount++;
      } else {
        // Keep original pixel
        output.setPixelColor(pixel, x, y);
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
    const origW = maxX - minX;
    const origH = maxY - minY;
    const maxSpan = Math.max(origW, origH);
    
    // Find the center of the bounding box
    const centerX = Math.floor((minX + maxX) / 2);
    const centerY = Math.floor((minY + maxY) / 2);
    
    // Add padding
    const pad = 36;
    const side = maxSpan + pad * 2;
    
    let cropX = centerX - Math.floor(side / 2);
    let cropY = centerY - Math.floor(side / 2);
    
    // Ensure bounds are within the image size, keeping it square
    if (cropX < 0) cropX = 0;
    if (cropY < 0) cropY = 0;
    if (cropX + side > width) cropX = width - side;
    if (cropY + side > height) cropY = height - side;
    
    const cropW = Math.min(side, width - cropX);
    const cropH = Math.min(side, height - cropY);
    const squareSide = Math.min(cropW, cropH);

    console.log(`Cropping to square: ${squareSide}x${squareSide} at (${cropX}, ${cropY})`);
    output.crop({ x: cropX, y: cropY, w: squareSide, h: squareSide });
  }

  // Next.js app directory icon path
  const targetDir = path.join(__dirname, 'src', 'app');
  const targetIconPath = path.join(targetDir, 'icon.png');
  
  // Make sure to output a square icon for favicon, e.g. resize to 512x512
  output.resize({ w: 512, h: 512 });
  
  await output.write(targetIconPath);
  console.log(`Saved transparent logo to ${targetIconPath}`);

  // Delete the old favicon.ico to prevent cache and priority conflicts
  const oldFaviconPath = path.join(targetDir, 'favicon.ico');
  if (fs.existsSync(oldFaviconPath)) {
    fs.unlinkSync(oldFaviconPath);
    console.log(`Deleted old favicon: ${oldFaviconPath}`);
  }
}

main().catch(console.error);

const { Jimp } = require('jimp');
const path = require('path');

async function main() {
  const imgPath = 'C:\\Users\\vishn\\.gemini\\antigravity-ide\\brain\\97bd031c-303f-4d4a-8928-67557e9de225\\media__1784883535972.jpg';
  const image = await Jimp.read(imgPath);
  const width = image.width;
  const height = image.height;
  console.log(`Original dimensions: ${width}x${height}`);

  // Let's sample a horizontal line across the middle of the image (y = 150)
  // which contains both the background and the text "JOURNEYS OF LIFE"
  const y = Math.floor(height / 2);
  console.log(`Sampling row y=${y}:`);
  
  let nonBlack = 0;
  for (let x = 0; x < width; x += 10) {
    const pixel = image.getPixelColor(x, y);
    const r = (pixel >> 24) & 0xff;
    const g = (pixel >> 16) & 0xff;
    const b = (pixel >> 8) & 0xff;
    
    // Print if it's not pure black (RGB all 0) or close to it
    if (r > 0 || g > 0 || b > 0) {
      console.log(`x=${x}: RGB(${r}, ${g}, ${b})`);
      nonBlack++;
    }
  }
  console.log(`Found ${nonBlack} non-black samples on this row.`);
}

main().catch(console.error);

const { Jimp } = require('jimp');
const path = require('path');

async function main() {
  const imgPath = 'C:\\Users\\vishn\\.gemini\\antigravity-ide\\brain\\97bd031c-303f-4d4a-8928-67557e9de225\\media__1784883535972.jpg';
  const image = await Jimp.read(imgPath);
  const width = image.width;
  const height = image.height;
  
  console.log(`Searching right half of the image (x > ${Math.floor(width/2)})...`);
  
  let foundCount = 0;
  const startX = Math.floor(width / 2);
  
  // Let's check every pixel in the right half
  for (let y = 0; y < height; y++) {
    for (let x = startX; x < width; x++) {
      const pixel = image.getPixelColor(x, y);
      const r = (pixel >> 24) & 0xff;
      const g = (pixel >> 16) & 0xff;
      const b = (pixel >> 8) & 0xff;
      
      // If the pixel is not completely black (let's say any channel > 10)
      if (r > 10 || g > 10 || b > 10) {
        if (foundCount < 50) {
          console.log(`x=${x}, y=${y}: RGB(${r}, ${g}, ${b}) -> Hex: #${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`);
        }
        foundCount++;
      }
    }
  }
  
  console.log(`Total non-black pixels in right half: ${foundCount}`);
}

main().catch(console.error);

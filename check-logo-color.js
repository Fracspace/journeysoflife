const { Jimp } = require('jimp');
const path = require('path');

async function main() {
  const logo = await Jimp.read(path.join(__dirname, 'public', 'logo.png'));
  const width = logo.width;
  const height = logo.height;
  
  console.log(`Logo dimensions: ${width}x${height}`);
  
  // Let's sample some non-transparent pixels and print their hex colors
  let samples = 0;
  for (let y = 0; y < height && samples < 20; y += Math.floor(height / 10)) {
    for (let x = 0; x < width && samples < 20; x += Math.floor(width / 15)) {
      const pixel = logo.getPixelColor(x, y);
      const a = pixel & 0xff;
      if (a > 0) {
        const r = (pixel >> 24) & 0xff;
        const g = (pixel >> 16) & 0xff;
        const b = (pixel >> 8) & 0xff;
        console.log(`Pixel at (${x}, ${y}): RGB(${r}, ${g}, ${b}) -> Hex: #${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`);
        samples++;
      }
    }
  }
}

main().catch(console.error);

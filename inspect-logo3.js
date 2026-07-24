const { Jimp } = require('jimp');
const path = require('path');

async function main() {
  const logo = await Jimp.read(path.join(__dirname, 'public', 'logo3.png'));
  console.log(`logo3.png dimensions: ${logo.width}x${logo.height}`);
}

main().catch(console.error);

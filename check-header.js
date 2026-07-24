const fs = require('fs');
const path = require('path');

function main() {
  const filePath = path.join(__dirname, 'public', 'logo3.png');
  const buffer = Buffer.alloc(8);
  const fd = fs.openSync(filePath, 'r');
  fs.readSync(fd, buffer, 0, 8, 0);
  fs.closeSync(fd);
  
  console.log('First 8 bytes (Hex):', buffer.toString('hex').toUpperCase());
  
  if (buffer.toString('hex').toUpperCase().startsWith('89504E47')) {
    console.log('This is a valid PNG file.');
  } else if (buffer.toString('hex').toUpperCase().startsWith('FFD8FF')) {
    console.log('This is a JPEG file (incorrectly named as PNG).');
  } else if (buffer.toString('ascii').startsWith('GIF8')) {
    console.log('This is a GIF file.');
  } else {
    console.log('Unknown format.');
  }
}

main();

const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./streams/largeFile.txt', { encoding: 'utf-8', highWaterMark: 1000 });
const writeStream = fs.createWriteStream('./streams/createdFile.txt', { encoding: 'utf-8' });
const gzib = zlib.createGzip();

//First way
// readStream.on('data', (chunk) => {
//     writeStream.write(chunk)
// });

// readStream.on('end', () => {
//     writeStream.end();
// });

//Second Way
readStream.pipe(writeStream);

//Third way-getting archieved
// readStream.pipe(gzib).pipe(writeStream);
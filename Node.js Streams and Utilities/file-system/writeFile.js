const fs = require('fs/promises');

const data = 'some text | some text | some text | some text | some text | some text';

fs.writeFile('./file-system/createdFile.txt', data, { encoding: 'utf-8' })
    .then(() => console.log('finished'))
    .catch(err => console.log(err));
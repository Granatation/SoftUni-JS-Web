const fs = require('fs/promises');

fs.mkdir('./test')
    .then(() => console.log('created'));


//Can be renamed
// fs.rename('./test', './renamed')
//     .then(() => console.log('renamed'))

//Can be deleted
// fs.unlink('./test')
//     .then(() => console.log('deleted'))
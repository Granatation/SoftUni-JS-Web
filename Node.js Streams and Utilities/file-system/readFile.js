const fs = require('fs');

fs.readFile('./file-system/text.txt', { encoding: 'utf-8' }, (err, data) => {
    if (err) console.log(err);

    console.log(data);
});

//Sync way
// const data = fs.readFileSync('./file-system/text.txt', { encoding: 'utf-8' });
// console.log(data);
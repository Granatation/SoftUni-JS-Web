const cubes = require('../db.json');
const fs = require('fs/promises');
const path = require('path');




exports.save = (cube) => {
    cubes.push(cube);
    let textData = JSON.stringify(cubes, '', 4)

    return fs.writeFile(path.resolve('Workshop ExpressJS and Templating', 'src/db.json'), textData, { encoding: 'utf-8' });
};
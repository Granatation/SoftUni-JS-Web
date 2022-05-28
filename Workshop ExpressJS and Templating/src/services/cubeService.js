const cubes = require('../db.json');
const fs = require('fs/promises');
const path = require('path');

exports.getOne = (id) => cubes[id];

exports.save = (cube) => {
    cubes.push({ id: cubes[cubes.length - 1].id + 1, ...cube });
    let textData = JSON.stringify(cubes, '', 4);

    return fs.writeFile(path.resolve('Workshop ExpressJS and Templating', 'src/db.json'), textData, { encoding: 'utf-8' });
};
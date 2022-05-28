const cubes = require('../db.json');
const fs = require('fs/promises');
const path = require('path');

exports.getOne = (id) => cubes[id];

exports.getAll = (search, from, to) => {
    const result = cubes
        .filter(x => x.name.toLowerCase().includes(search ? search.toLowerCase() : ''))
        .filter(x => from ? x.difficultyLevel >= from : true)
        .filter(x => to ? x.difficultyLevel <= to : true)

    return result;
};

exports.save = (cube) => {
    cubes.push({ id: cubes[cubes.length - 1].id + 1, ...cube });
    let textData = JSON.stringify(cubes, '', 4);

    return fs.writeFile(path.resolve('Workshop ExpressJS and Templating', 'src/db.json'), textData, { encoding: 'utf-8' });
};
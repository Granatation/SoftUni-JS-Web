const Cube = require('../models/cube');
const fs = require('fs/promises');
const path = require('path');

exports.getOne = (id) => Cube.findById(id);

exports.getAll = async(search, from, to) => {
    // const result = cubes
    //     .filter(x => x.name.toLowerCase().includes(search ? search.toLowerCase() : ''))
    //     .filter(x => from ? x.difficultyLevel >= from : true)
    //     .filter(x => to ? x.difficultyLevel <= to : true)

    let cubes = await Cube.find().lean();

    return cubes;
};

exports.create = (cube) => Cube.create(cube);
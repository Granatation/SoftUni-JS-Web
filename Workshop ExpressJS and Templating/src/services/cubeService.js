const Cube = require('../models/cube');

exports.getOne = (id) => Cube.findById(id);

exports.getAll = async(search, from, to) => {


    let cubes = await Cube.find().lean();

    const result = cubes
        .filter(x => x.name.toLowerCase().includes(search ? search.toLowerCase() : ''))
        .filter(x => from ? x.difficultyLevel >= from : true)
        .filter(x => to ? x.difficultyLevel <= to : true);

    return result;
};

exports.create = (cube) => Cube.create(cube);
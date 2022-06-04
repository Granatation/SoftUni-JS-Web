const Cube = require('../models/cube');
const Accessory = require('../models/accessory');

exports.getOne = (id) => Cube.findById(id);

exports.getOneDetailed = (id) => Cube.findById(id).populate('accessories');

exports.getAll = async(search, from, to) => {
    let cubes = await Cube.find().lean();

    const result = cubes
        .filter(x => x.name.toLowerCase().includes(search ? search.toLowerCase() : ''))
        .filter(x => from ? x.difficultyLevel >= from : true)
        .filter(x => to ? x.difficultyLevel <= to : true);

    return result;
};

exports.create = (cube) => Cube.create(cube);

exports.attachAccessory = async(cubeId, accessoryId) => {
    const cube = await Cube.findById(cubeId);
    const accessory = await Accessory.findById(accessoryId);

    cube.accessories.push(accessory);
    accessory.cubes.push(cube);

    await cube.save();
    await accessory.save();

    return cube;
};
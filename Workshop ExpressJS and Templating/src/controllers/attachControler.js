const cubeService = require('../services/cubeService');
const accessoryService = require('../services/accessoryService');

exports.index = async(req, res) => {
    const cube = await cubeService.getOne(req.params.cubeId).lean();
    const accessories = await accessoryService.getAll().lean();

    res.render('accessory/attach', { cube, accessories })
};

exports.indexPost = async(req, res) => {
    const accessoryId = req.body.accessory;

    await cubeService.attachAccessory(req.params.cubeId, accessoryId)

    res.redirect(`/cube/details/${req.params.cubeId}`)
};
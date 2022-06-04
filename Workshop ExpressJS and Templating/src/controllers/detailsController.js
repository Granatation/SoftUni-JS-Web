const cubeService = require('../services/cubeService');

exports.index = async(req, res) => {
    const cube = await cubeService.getOne(req.params.cubeId).lean();
    res.render('details', { cube });
};
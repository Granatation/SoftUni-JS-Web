const cubeService = require('../services/cubeService');

exports.index = async(req, res) => {
    const cube = await cubeService.getOne(req.params.id).lean();

    res.render('details', {...cube });
};
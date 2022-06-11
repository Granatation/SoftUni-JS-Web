const cubeService = require('../services/cubeService');

exports.index = async(req, res) => {
    const cube = await cubeService.getOneDetailed(req.params.cubeId).lean();
    const isOwner = req.user && cube.owner == req.user._id;

    res.render('details', { cube, isOwner });
};
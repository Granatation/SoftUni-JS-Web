const cubeService = require('../services/cubeService');

exports.index = async(req, res) => {
    const cube = await cubeService.getOne(req.params.cubeId).lean();

    cube[`difficultyLevel${cube.difficultyLevel}`] = true;

    res.render('deleteCubePage', { cube });
}

exports.indexPost = async(req, res) => {
    await cubeService.delete(req.params.cubeId);
    res.redirect('/');
}
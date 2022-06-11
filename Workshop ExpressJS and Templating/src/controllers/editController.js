const cubeService = require('../services/cubeService');

exports.index = async(req, res) => {
    const cube = await cubeService.getOne(req.params.cubeId).lean();
    cube[`difficultyLevel${cube.difficultyLevel}`] = true
    if (!cube) {
        return res.redirect('/404');
    }

    res.render('editCubePage', { cube });
}

exports.indexPost = async(req, res) => {
    let modifiedCube = await cubeService.edit(req.params.cubeId, req.body);
    res.redirect(`/cube/details/${modifiedCube._id}`);
}
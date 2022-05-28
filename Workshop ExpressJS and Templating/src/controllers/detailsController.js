const cubeService = require('../services/cubeService');

exports.index = (req, res) => {
    const cube = cubeService.getOne(req.params.id)

    res.render('details', {...cube });
};
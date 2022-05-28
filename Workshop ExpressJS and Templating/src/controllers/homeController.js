const cubeService = require('../services/cubeService');

exports.index = (req, res) => {
    let { search, from, to } = req.query;

    const cubes = cubeService.getAll(search, from, to)

    res.render('index', { cubes });
};
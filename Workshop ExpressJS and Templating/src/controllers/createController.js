const cubeService = require('../services/cubeService');

exports.indexGet = (req, res) => {
    res.render('create');
};

exports.indexPost = (req, res) => {
    const cube = req.body;
    cube.owner = req.user._id;

    if (cube.name.length < 2) {
        return res.status(400).send("invalid request");
    }

    cubeService.create(cube)
        .then(() => {
            res.redirect('/');
        })
        .catch(err => {
            res.status(400).send(err);
        })
};
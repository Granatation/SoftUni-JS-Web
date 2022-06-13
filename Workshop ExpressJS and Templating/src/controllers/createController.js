const cubeService = require('../services/cubeService');
const { validationResult } = require('express-validator');

exports.indexGet = (req, res) => {
    res.render('create');
};

exports.indexPost = (req, res) => {
    const cube = req.body;

    cube.owner = req.user._id;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).send(errors.array()[0].msg);
    }

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
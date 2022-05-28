const cubes = require('../db.json');

const fs = require('fs/promises');

exports.indexGet = (req, res) => {
    res.render('create');
};

exports.indexPost = (req, res) => {
    const cube = req.body;

    if (cube.name.length < 2) {
        return res.status(400).send("invalid request");
    }

    cubes.push(cube)
    fs.writeFile('../db.json', JSON.stringify(cubes))
        .then(() => {
            res.redirect('/');
        })
        .catch(err => {
            res.status(400).send(err);
        })
};
const accessoryService = require('../services/accessoryService');

exports.index = (req, res) => {
    res.render('accessory/create');
};


exports.indexPost = async(req, res) => {
    await accessoryService.create(req.body);
    res.redirect('/')
};
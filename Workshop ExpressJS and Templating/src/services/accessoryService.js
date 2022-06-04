const Accessory = require('../models/accessory');

exports.create = (accessoryData) => Accessory.create(accessoryData);

exports.getAll = () => Accessory.find();
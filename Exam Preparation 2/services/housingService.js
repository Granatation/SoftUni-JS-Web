const Housing = require('../models/Housing');

exports.create = (housingData) => Housing.create(housingData);

exports.getAll = () => Housing.find();

exports.getOne = (housingId) => Housing.findById(housingId);

exports.getOneDetailed = (housingId) => Housing.findById(housingId).populate('owner').populate('renters');

exports.update = (housingId, housingData) => Housing.updateOne({ _id: housingId }, { $set: housingData }, { runValidators: true })

exports.delete = (housingId) => Housing.deleteOne({ _id: housingId });
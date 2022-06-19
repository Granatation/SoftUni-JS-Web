const { on } = require("../models/accessory");

exports.modelVaidator = (Model) => async(req, res, next) => {
    try {
        await Model.validate(req.body);
        next()
    } catch (error) {
        res.status(400).send(Object.values(error)[0]);
    }
};
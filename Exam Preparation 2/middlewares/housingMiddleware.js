const housingService = require('../services/housingService');

exports.preloadHousing = async(req, res, next) => {
    const housing = await housingService.getOne(req.params.housingId).lean();

    req.housing = housing;

    next();
}

exports.isHousingAuthor = (req, res, next) => {
    if (req.housing.owner._id != req.user._id) {
        next({ message: 'You are not authorized', status: 401 })
    }

    next();
}
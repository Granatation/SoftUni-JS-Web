const router = require('express').Router();
const housingService = require('../services/housingService');

router.get('/', async(req, res) => {
    let housings = await housingService.getAll().lean();
    housings = housings.splice(housings.length - 3, 3)

    res.render('home', { housings });
});

module.exports = router;
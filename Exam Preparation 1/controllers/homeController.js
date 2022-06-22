const router = require('express').Router();

const publicationService = require('../services/publicationService');

router.get('/', async(req, res) => {
    const publicationsResult = await publicationService.getAll().lean();

    const publications = publicationsResult.map(x => ({...x, shareCount: x.usersShared.length }));

    res.render('home', { publications });
});

module.exports = router;
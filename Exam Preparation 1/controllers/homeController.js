const router = require('express').Router();

const publicationService = require('../services/publicationService');
const userService = require('../services/userService');

router.get('/', async(req, res) => {
    const publicationsResult = await publicationService.getAll().lean();

    const publications = publicationsResult.map(x => ({...x, shareCount: x.usersShared.length }));

    res.render('home', { publications });
});

router.get('/profile', async(req, res) => {
    const user = await userService.getOne(req.user._id).populate('myPublications').populate('shares').lean();

    if (user.myPublications && user.shares) {
        const publicationTitles = user.myPublications.map(x => x.title).join(', ');
        const sharedTitles = user.shares.map(x => x.title).join(', ');
        res.render('home/profile', {...user, publicationTitles, sharedTitles });
    } else if (!user.shares) {
        const publicationTitles = user.myPublications.map(x => x.title).join(', ');
        res.render('home/profile', {...user, publicationTitles, sharedTitles: undefined });
    } else if (!user.myPublications) {
        const sharedTitles = user.shares.map(x => x.title).join(', ');
        res.render('home/profile', {...user, publicationTitles: undefined, sharedTitles });
    } else {
        res.render('home/profile', {...user, publicationTitles, sharedTitles });
    }
})

module.exports = router;
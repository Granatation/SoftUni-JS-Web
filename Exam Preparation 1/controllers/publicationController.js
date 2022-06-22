const router = require('express').Router();

const mongoose = require('mongoose');

const { isAuth } = require('../middlewares/authMiddleware');
const { preloadPublication, isPublicationAuthor } = require('../middlewares/publicationMiddleware');
const publicationService = require('../services/publicationService');
const { getErrorMessage } = require('../utils/errorHelpers');

router.get('/', async(req, res) => {
    const publications = await publicationService.getAll().lean();

    res.render('publication', { publications });
});

router.get('/:publicationId/details', async(req, res) => {
    const publicationLean = await publicationService.getOneDetailed(req.params.publicationId).lean();
    const publication = await publicationService.getOneDetailed(req.params.publicationId)
    const isAuthor = req.user && publication.author._id == req.user._id;
    const isShared = publication.usersShared.includes(mongoose.Types.ObjectId(req.user._id));

    res.render('publication/details', {...publicationLean, isAuthor, isShared });
});

router.get('/:publicationId/edit', isAuth, preloadPublication, isPublicationAuthor, async(req, res) => {

    res.render('publication/edit', {...req.publication })
});

router.post('/:publicationId/edit', isAuth, preloadPublication, isPublicationAuthor, async(req, res) => {
    try {
        await publicationService.update(req.params.publicationId, req.body);

        res.redirect(`/publications/${req.params.publicationId}/details`);
    } catch (error) {
        res.render('publication/edit', {...req.body, error: getErrorMessage(error) })
    }
});

router.get('/create', isAuth, (req, res) => {
    res.render('publication/create');
});

router.post('/create', isAuth, async(req, res) => {
    const publicationData = {...req.body, author: req.user }
    try {
        await publicationService.create(publicationData);

        res.redirect('/publications');

    } catch (error) {
        res.render('publication/create', {...req.body, error: getErrorMessage(error) })
    }
});

router.get('/:publicationId/delete', isAuth, preloadPublication, isPublicationAuthor, async(req, res) => {
    await publicationService.delete(req.params.publicationId);

    res.render('home')
});

router.get('/:publicationId/share', isAuth, async(req, res) => {
    const publication = await publicationService.getOne(req.params.publicationId);

    publication.usersShared.push(req.user._id);

    await publication.save();

    res.redirect('/')
});

module.exports = router;
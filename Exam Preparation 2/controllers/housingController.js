const router = require('express').Router();

const mongoose = require('mongoose');

const { isAuth } = require('../middlewares/authMiddleware');
// const { preloadHousing, isHousingAuthor } = require('../middlewares/housingMiddleware');
const housingService = require('../services/housingService');
const userService = require('../services/userService');
const { getErrorMessage } = require('../utils/errorHelpers');

router.get('/', async(req, res) => {
    const housings = await housingService.getAll().lean();

    res.render('housing', { housings });
});

router.get('/:housingId/details', async(req, res) => {
    const housingLean = await housingService.getOneDetailed(req.params.housingId).lean();
    const housing = await housingService.getOneDetailed(req.params.housingId)
    const isAuthor = req.user && housing.owner == req.user._id;
    const isRented = housing.renters.includes(mongoose.Types.ObjectId(req.user._id));
    const isNotAvailable = housing.availablePieces == 0

    res.render('housing/details', {...housingLean, isAuthor, isRented, isNotAvailable });
});

// router.get('/:publicationId/edit', isAuth, preloadPublication, isPublicationAuthor, async(req, res) => {

//     res.render('publication/edit', {...req.publication })
// });

// router.post('/:publicationId/edit', isAuth, preloadPublication, isPublicationAuthor, async(req, res) => {
//     try {
//         await publicationService.update(req.params.publicationId, req.body);

//         res.redirect(`/publications/${req.params.publicationId}/details`);
//     } catch (error) {
//         res.render('publication/edit', {...req.body, error: getErrorMessage(error) })
//     }
// });

router.get('/create', isAuth, (req, res) => {
    res.render('housing/create');
});

router.post('/create', isAuth, async(req, res) => {
    const housingData = {...req.body, owner: req.user };

    try {
        await housingService.create(housingData);
        res.redirect('/housings');

    } catch (error) {
        res.render('housings/create', {...req.body, error: getErrorMessage(error) })
    }
});

// router.get('/:publicationId/delete', isAuth, preloadPublication, isPublicationAuthor, async(req, res) => {
//     const publication = await publicationService.getOne(req.params.publicationId).lean();
//     await publicationService.delete(req.params.publicationId);
//     await userService.deletePublication(req.user._id, publication._id);

//     res.render('home')
// });

router.get('/:housingId/rent', isAuth, async(req, res) => {
    const housing = await housingService.getOne(req.params.housingId);
    const user = await userService.getOne(req.user._id);

    housing.usersShared.push(req.user._id);
    user.shares.push(housing);

    await user.save();
    await housing.save();

    res.redirect('/')
});

module.exports = router;
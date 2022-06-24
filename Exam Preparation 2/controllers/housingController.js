const router = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware');
const { preloadHousing, isHousingAuthor } = require('../middlewares/housingMiddleware');
const housingService = require('../services/housingService');
const { getErrorMessage } = require('../utils/errorHelpers');

router.get('/', async(req, res) => {
    const housings = await housingService.getAll().lean();

    res.render('housing', { housings });
});

router.get('/:housingId/details', async(req, res) => {
    const housingLean = await housingService.getOneDetailed(req.params.housingId).lean();
    const housing = await housingService.getOneDetailed(req.params.housingId)
    const isAuthor = req.user && housing.owner._id == req.user._id;
    const isRented = housing.renters.some(x => x._id == req.user._id);
    const isNotAvailable = housing.availablePieces == 0;
    const renters = housing.renters.map(x => x.name).join(', ')

    res.render('housing/details', {...housingLean, isAuthor, isRented, isNotAvailable, renters });
});

router.get('/:housingId/edit', isAuth, preloadHousing, isHousingAuthor, (req, res) => {

    res.render('housing/edit', {...req.housing })
});

router.post('/:housingId/edit', isAuth, preloadHousing, isHousingAuthor, async(req, res) => {
    try {
        await housingService.update(req.params.housingId, req.body);

        res.redirect(`/housings/${req.params.housingId}/details`);
    } catch (error) {
        res.render('housing/edit', {...req.body, error: getErrorMessage(error) })
    }
});

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

router.get('/:housingId/delete', isAuth, preloadHousing, isHousingAuthor, async(req, res) => {
    await housingService.delete(req.params.housingId);
    const housings = await housingService.getAll().lean();

    res.render('home', { housings })
});

router.get('/:housingId/rent', isAuth, async(req, res) => {
    const housing = await housingService.getOne(req.params.housingId);

    housing.renters.push(req.user._id);
    housing.availablePieces--;

    await housing.save();

    res.redirect('/')
});

router.get('/search', isAuth, async(req, res) => {
    const housings = await housingService.getAll().lean()

    res.render('housing/search', { housings });
});

router.post('/search', isAuth, async(req, res) => {
    const housings = await housingService.getAll().lean()

    for (const housing of housings) {
        if (housing.type == req.body) {
            result.push(housing)
        }
    }
    console.log(result)
    res.render('housing/search', { result });
});

module.exports = router;
const express = require('express');
const { isAuth } = require('./middlewares/authMiddleware');
const { body } = require('express-validator');
const Accessory = require('./models/accessory');
const { modelVaidator } = require('./middlewares/modelValidatorMiddleware');

const homeController = require('./controllers/homeController');
const aboutController = require('./controllers/aboutController');
const createController = require('./controllers/createController');
const detailsController = require('./controllers/detailsController');
const accessoryController = require('./controllers/accessoryController');
const attachController = require('./controllers/attachControler');
const authController = require('./controllers/authController');
const editController = require('./controllers/editController');
const deleteController = require('./controllers/deleteController');

const router = express.Router();

router.get('/', homeController.index);
router.get('/about', aboutController.index);
router.get('/cube/create', isAuth, createController.indexGet);
router.post('/cube/create',
    isAuth,
    body('name').not().isEmpty(),
    body('description').isLength({ min: 5, max: 120 }),
    body('difiicultyLevel', 'Difficulty level is required to be in range 1 to 6').toInt().isInt({ min: 1, max: 6 }),
    createController.indexPost);
router.get('/cube/details/:cubeId', detailsController.index);
router.get('/accessory/create', isAuth, accessoryController.index);
router.post('/accessory/create', modelVaidator(Accessory), accessoryController.indexPost);
router.get('/cube/:cubeId/accessory', attachController.index);
router.post('/cube/:cubeId/accessory', attachController.indexPost);
router.use('/auth', authController);
router.get('/cube/:cubeId/edit', isAuth, editController.index);
router.post('/cube/:cubeId/edit', editController.indexPost);
router.get('/cube/:cubeId/delete', isAuth, deleteController.index);
router.post('/cube/:cubeId/delete', deleteController.indexPost);
router.use('*', (req, res) => {
    res.render('404');
})


module.exports = router;
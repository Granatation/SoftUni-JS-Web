const express = require('express');
const { isAuth } = require('./middlewares/authMiddleware');
const { isOwner } = require('./middlewares/cubeMiddleware');

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
router.post('/cube/create', createController.indexPost);
router.get('/cube/details/:cubeId', detailsController.index);
router.get('/accessory/create', isAuth, accessoryController.index);
router.post('/accessory/create', accessoryController.indexPost);
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
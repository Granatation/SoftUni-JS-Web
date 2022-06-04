const express = require('express');

const homeController = require('./controllers/homeController');
const aboutController = require('./controllers/aboutController');
const createController = require('./controllers/createController');
const detailsController = require('./controllers/detailsController');
const accessoryController = require('./controllers/accessoryController');
const attachController = require('./controllers/attachControler');

const router = express.Router();

router.get('/', homeController.index);
router.get('/about', aboutController.index);
router.get('/cube/create', createController.indexGet);
router.post('/cube/create', createController.indexPost);
router.get('/cube/details/:cubeId', detailsController.index);
router.get('/accessory/create', accessoryController.index);
router.post('/accessory/create', accessoryController.indexPost);
router.get('/cube/:cubeId/accessory', attachController.index);
router.post('/cube/:cubeId/accessory', attachController.indexPost);

module.exports = router;
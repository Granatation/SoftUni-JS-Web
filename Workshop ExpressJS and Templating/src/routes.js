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
router.get('/cube/details/:id', detailsController.index);
router.get('/accessory/create', accessoryController.index);
router.post('/accessory/create', accessoryController.indexPost);
router.get('/cube/:id/accessory', attachController.index);


module.exports = router;
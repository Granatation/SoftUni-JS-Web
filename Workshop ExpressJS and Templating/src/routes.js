const express = require('express');

const homeController = require('./controllers/homeController');
const aboutController = require('./controllers/aboutController');
const createController = require('./controllers/createController');
const detailsController = require('./controllers/detailsController');
const accessoryController = require('./controllers/accessoryController')

const router = express.Router();

router.get('/', homeController.index);
router.get('/about', aboutController.index);
router.get('/create', createController.indexGet);
router.post('/create', createController.indexPost);
router.get('/details/:id', detailsController.index);
router.get('/accessory/create', accessoryController.index);

module.exports = router;
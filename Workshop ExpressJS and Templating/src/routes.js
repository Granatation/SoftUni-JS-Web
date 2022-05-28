const express = require('express');

const homeController = require('./controllers/homeController');
const aboutController = require('./controllers/aboutController');
const createController = require('./controllers/createController');

const router = express.Router();

router.get('/', homeController.index);
router.get('/about', aboutController.index);
router.get('/create', createController.indexGet);
router.post('/create', createController.indexPost);

module.exports = router;
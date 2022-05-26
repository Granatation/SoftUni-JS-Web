const express = require('express');

const homeController = require('./controllers/homeController');
const aboutController = require('./controllers/aboutController');

const router = express.Router();

router.get('/', homeController.index);
router.get('/about', aboutController.index);

module.exports = router;
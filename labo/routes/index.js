var express = require('express');
var router = express.Router();
const articleController = require('../controllers/articleController');
const aboutController = require('../controllers/aboutController');
const pagesController = require('../controllers/pagesController');

/* GET home page. */
router.get('/', articleController.getPortfolio);
router.get('/about', aboutController.getFact);
router.get('/contact', pagesController.contact);

module.exports = router;

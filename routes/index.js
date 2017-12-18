var logger = require('winston');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  logger.log('info', 'index route was requested');
  res.render('index', { title: 'Express' });
});

module.exports = router;

const logger = require('winston');
const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  logger.log('info', 'index route was requested');
  res.render('index', { title: 'Express' });
});

module.exports = router;

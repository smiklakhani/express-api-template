const express = require('express');
const renderIndex = require('../controllers/index.controller');

const router = express.Router();

/* GET home page. */
router.get('/', renderIndex);

module.exports = router;

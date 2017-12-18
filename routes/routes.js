const express = require('express');
const indexRoute = require('./index');
const usersRoute = require('./users');

const router = express.Router();

router.use('/', indexRoute);
router.use('/users', usersRoute);

module.exports = router;

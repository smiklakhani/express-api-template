const express = require('express');
const indexRoute = require('./index.route');
const usersRoute = require('./users.route');

const router = express.Router();

router.use('/', indexRoute);
router.use('/users', usersRoute);

module.exports = router;

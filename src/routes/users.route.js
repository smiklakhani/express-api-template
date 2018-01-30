const express = require('express');
const getUsers = require('../controllers/users.controller');

const router = express.Router();

/* GET users listing. */
router.get('/', getUsers);

module.exports = router;

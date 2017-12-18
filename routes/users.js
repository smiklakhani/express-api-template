var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const userList = [
    {
      firstName: 'John',
      lastName: 'Waley',
      age: 36,
    },
    {
      firstName: 'Dorothy',
      lastName: 'Shaw',
      age: 24,
    }
  ];

  res.json(userList);
});

module.exports = router;

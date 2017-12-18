const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
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
    },
  ];

  res.json(userList);
});

module.exports = router;

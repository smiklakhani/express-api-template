/**
 * Returns a users list
 * @param {*} req
 * @param {*} res
 */
const getUsers = (req, res) => {
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
};

module.exports = getUsers;

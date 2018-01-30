const logger = require('winston');

/**
 * Renders the index page
 * @param {*} req
 * @param {*} res
 */
const renderIndex = (req, res) => {
  res.status(200).send("Hello World!");
};

module.exports = renderIndex;

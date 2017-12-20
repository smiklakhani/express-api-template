const logger = require('winston');

/**
 * Renders the index page
 * @param {*} req
 * @param {*} res
 */
const renderIndex = (req, res) => {
  logger.log('info', 'index route was requested');
  res.render('index', { title: 'Express' });
};

module.exports = renderIndex;

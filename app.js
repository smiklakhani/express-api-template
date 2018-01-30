// require dependencies
const express = require('express');
const path = require('path');
const logger = require('winston');
const httpLogger = require('morgan');
const helmet = require('helmet');
const config = require('./config/config');

// require routes
const routes = require('./src/routes/routes');

// create Express app
const app = express();

// logging setup
app.use(httpLogger('dev'));

// HTTP header security setup
app.use(helmet());

// setup to enable application to parse incoming JSON payloads
app.use(express.json());

// set up healthCheck route
app.get(`/${config.API_NAME}/healthCheck`, (req, res) => {
  res.json({status: 'we are live'});
})

// set up routes
app.use(`/${config.API_NAME}`, routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  logger.log('error', 'Requested resource does not exist.');
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

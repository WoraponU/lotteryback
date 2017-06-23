/**
 * Module dependencies.
 */
// const express = require('express');
// const session = require('express-session');
const compression = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const helmet = require('helmet');
const cors = require('cors');


const env = process.env.NODE_ENV || 'development';
// const cookieSecret = process.env.SESSION_SECRET || 'secret';

/**
 * Expose
 */

module.exports = function (app) {
  app.use(cors());
  app.use(helmet.noCache());
  app.use(helmet.frameguard());

  // Compression middleware (should be placed before express.static)
  app.use(compression({
    threshold: 512,
  }));

  // bodyParser should be above methodOverride
  app.use(bodyParser.json());
  app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(methodOverride((req) => {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      const method = req.body._method;
      delete req.body._method;
      return method;
    }
  }));

  // if (env === 'development') {
  //   app.locals.pretty = true;
  // }
};

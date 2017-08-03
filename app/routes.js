const handlers = require('./handlers');
const mailsRoute = require('./routes/mailsRoute');
const auth = require('./middlewares/auth');


module.exports = (app) => {
  app.use(auth);
  // app.use('/api', usersRoute);
  app.use('/api/mail', mailsRoute);

  /**
  * Error handling
  */
  app.use(handlers);

  // assume 404 since no middleware responded
  app.use((req, res) => {
    res.status(404).json({
      error: 404,
      description: 'Not found',
      url: req.originalUrl,
    });
  });
};

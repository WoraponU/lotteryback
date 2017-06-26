const handlers = require('./handlers');
const usersRoute = require('./routes/usersRoute');


module.exports = (app) => {
  app.use('/api', usersRoute);

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

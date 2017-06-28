const usersModel = require('../models/usersModel');
const config = require('../../config/config');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.header('Authorization');

  if (!authHeader) return next();
  const accessToken = authHeader.match(/Bearer (.*)/)[1];

  jwt.verify(accessToken, config.secretKey, (err, decoded) => {
    if (err) return next();

    usersModel
      .getUserByUsername(decoded.sub)
      .then((resp) => {
        req.user = resp;
        next();
      })
      .catch(() => next());
  });
  return undefined;
};

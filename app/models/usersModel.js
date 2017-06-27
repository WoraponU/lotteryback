const usersSchema = require('./schema/usersSchema');
const config = require('../../config/config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
  verifyPassword: (password, hashPassword) => (
    new Promise((resolve, reject) => {
      bcrypt.compare(password, hashPassword, (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    })
  ),

  genAccessToken: user => (
    jwt.sign({ sub: user.name }, config.secretKey, { expiresIn: '1h' })
  ),

  create: (data) => {
    const createUserDataes = data;

    return new Promise((resolve, reject) => {
      bcrypt.genSalt(10, (err, salt) => {
        if (err) reject(err);

        bcrypt.hash(createUserDataes.password, salt, (errResp, hash) => {
          if (errResp) reject(errResp);

          createUserDataes.password = hash;
          resolve(usersSchema.create(createUserDataes));
        });
      });
    });
  },

  getUserByUsername: username => (
    new Promise((resolve, reject) => {
      usersSchema.findOne({ username }, (err, doc) => {
        if (err) reject(err);

        resolve(doc);
      });
    })
  ),

  all: () => usersSchema.find(),
};

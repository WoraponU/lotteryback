const usersSchema = require('./schema/usersSchema');
const bcrypt = require('bcryptjs');

module.exports = {
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

  all: () => usersSchema.find(),
};

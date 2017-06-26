const testSchema = require('./schema/userSchema');
const bcrypt = require('bcryptjs');

module.exports = {
  create: (data) => {
    console.log(data.password);
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(data.password, salt, function(err, hash) {
          console.log(hash);
      });
    });
  },
  all: () => testSchema.find(),
};

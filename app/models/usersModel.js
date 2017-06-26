const testSchema = require('./schema/userSchema');
// const bcrypt = require('bcrypt');

module.exports = {
  create: (data) => {
    console.log(data);
    // bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    //   testSchema.create(data);
    // });
  },
  all: () => testSchema.find(),
};

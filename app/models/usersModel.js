const userSchema = require('./schema/userSchema');

module.exports = {
  create: data => userSchema.create(data),
  all: () => userSchema.find(),
};

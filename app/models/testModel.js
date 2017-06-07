const testSchema = require('./schema/testSchema');

module.exports = {
  create: data => testSchema.create(data),
  all: () => testSchema.find(),
};

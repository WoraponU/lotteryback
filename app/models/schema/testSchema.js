const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const testSchema = new Schema({
  name: { type: String },
}, {
  versionKey: false,
});

const testModel = mongoose.model('testModel', testSchema);

module.exports = testModel;

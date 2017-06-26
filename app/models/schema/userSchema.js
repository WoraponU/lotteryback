const mongoose = require('mongoose');
const validator = require('node-mongoose-validator');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const users = new Schema({
  id: Schema.ObjectId,

  username: { type: String, required: true },
  password: { type: String, required: true },

  name: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, validate: validator.$isEmail(), required: true },
  phone: { type: String, validate: validator.$isNumeric(), required: true },
  role: { type: String, required: true },
  companyName: { type: String, required: true },

  billing: {
    detail: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    postCode: { type: Number, required: true },
    vatNumber: { type: Number, required: true },
  },

  shopping: {
    detail: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    postCode: { type: Number, required: true },
    vatNumber: { type: Number, required: true },
  },

  publishDate: { type: Date, default: Date.now, required: true },
}, {
  versionKey: false,
});

const usersModel = mongoose.model('usersModel', users);

module.exports = usersModel;

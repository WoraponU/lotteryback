const testModel = require('../models/testModel');

const testController = {
  create: (req, res) => {
    console.log(req.body);
    // testModel.create(req.body)
      // .then(resp => res.json(resp))
      // .catch(err => res.status(422).json(err))
  },
  all: (req, res) => testModel.all().then(resp => res.json(resp)),
};

module.exports = testController;

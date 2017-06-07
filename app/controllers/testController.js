const testModel = require('../models/testModel');

const testController = {
  create: (req, res) => (
    testModel.create(req.query).then(resp => res.json(resp))
  ),
  all: (req, res) => testModel.all().then(resp => res.json(resp)), 
};

module.exports = testController;

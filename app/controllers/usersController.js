const usersModel = require('../models/usersModel');

const usersController = {
  create: (req, res) => (
    usersModel.create(req.body)
      .then(resp => res.json(resp))
      .catch(err => res.status(422).json(err))
  ),
  all: (req, res) => (
    usersModel.all()
      .then(resp => res.json(resp))
      .catch(err => res.status(422).json(err))
  ),
};

module.exports = usersController;

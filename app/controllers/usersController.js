const usersModel = require('../models/usersModel');

const usersController = {
  create: (req, res) => (
    usersModel.create(req.body)
      .then(resp =>
        res
          .header('Authorization', `Bearer ${usersModel.genToken(resp)}`)
          .status(201)
          .json(resp))
      .catch(err => res.status(422).json(err))
  ),
  login: (req, res) => {
    Promise.all([
      usersModel.getUserByUsername(req.body.username),
      usersModel.getUserByUsername(req.body.username),
    ])
      .then((data) => {
        console.log(data);
      });
      // .then(data => {
      //   console.log("Second handler", data);
      // });

      // .then(resp => console.log(resp))
      // .catch(err => console.log(err));
    // usersModel.create(req.body)
    //   .then(resp => res.json(resp))
    //   .catch(err => res.status(422).json(err))
  },
  all: (req, res) => (
    usersModel.all()
      .then(resp => res.json(resp))
      .catch(err => res.status(422).json(err))
  ),
};

module.exports = usersController;

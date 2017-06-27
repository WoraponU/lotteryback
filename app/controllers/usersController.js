const usersModel = require('../models/usersModel');

const usersController = {
  create: (req, res) => (
    usersModel.create(req.body)
      .then(resp =>
        res
          .header('Authorization', `Bearer ${usersModel.genAccessToken(resp)}`)
          .status(201)
          .json(resp))
      .catch(err => res.status(422).json(err))
  ),
  login: (req, res) => {
    const { username, password } = req.body;

    usersModel.getUserByUsername(username)
      .then((resp) => {
        const { password: hashPassword } = resp;
        usersModel.verifyPassword(password, hashPassword)
          .then((isValid) => {
            if (isValid) {
              res
              .header('Authorization', `Bearer ${usersModel.genAccessToken(resp)}`)
              .status(201)
              .json(resp);
            }

            res
              .status(401)
              .json('Invalid credential.');
          });
      })
      .catch(err => res.status(404).json(err));
  },
  all: (req, res) => (
    usersModel.all()
      .then(resp => res.json(resp))
      .catch(err => res.status(422).json(err))
  ),
};

module.exports = usersController;

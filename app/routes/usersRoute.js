const express = require('express');
const usersController = require('../controllers/usersController');

const router = express.Router();

router.get('/users', usersController.all);
router.put('/users/:id', usersController.update);
router.post('/users', usersController.create);
router.post('/login', usersController.login);

module.exports = router;

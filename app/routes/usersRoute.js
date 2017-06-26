const express = require('express');
const usersController = require('../controllers/usersController');

const router = express.Router();

router.get('/users', usersController.all);
router.post('/create', usersController.create);

module.exports = router;

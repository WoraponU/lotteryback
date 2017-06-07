const express = require('express');
const test = require('../controllers/testController');

const router = express.Router();

router.get('/create', test.create);
router.get('/all', test.all);

module.exports = router;

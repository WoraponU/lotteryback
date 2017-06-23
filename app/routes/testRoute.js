const express = require('express');
const test = require('../controllers/testController');

const router = express.Router();

router.post('/create', test.create);
router.get('/all', test.all);

module.exports = router;

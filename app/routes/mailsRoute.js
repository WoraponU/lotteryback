const express = require('express');
const mailsContoller = require('../controllers/mailsContoller');

const router = express.Router();

router.post('/send-mail', mailsContoller.sendMail);

module.exports = router;

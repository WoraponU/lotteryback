const express = require('express');
const mailsContoller = require('../controllers/mailsContoller');

const router = express.Router();

router.post('/send-mail', mailsContoller.sendMail);
router.get('/test', mailsContoller.test);

module.exports = router;

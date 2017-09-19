const nodemailer = require('nodemailer');
const config = require('../../config/config');
const https = require('https');

module.exports = {
  sendMail: (req, res) => {
    const { name, email, phoneNumber, company, yourMind } = req.body;
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: config.mailHost,
        pass: config.mailHostPassword,
      },
    });

    const mailOption = {
      from: email,
      to: config.mailHost,
      subject: 'ASK US ANYTHING',
      html: `
        name: ${name},
        email: ${email},
        phone: ${phoneNumber},
        company: ${company},
        yourMind: ${yourMind}`,
    };

    transporter.sendMail(mailOption, (error, info) => {
      if (error) {
        return res.status(400).json(error);
      }
      return res.status(200).json(`Message ${info.messageId} sent: ${info.response}`);
    });
  },
  test: (req, res) => {
    const { url } = req.query;
    const expectWord = 'ยินดี';
    // const expectWord = 'ทอด';
    let isHasExpectWord = false;

    return https.get(url, (response) => {
    // return https.get('https://pantip.com/topic/36885719', (response) => {
      response.on('data', (chunk) => {
        isHasExpectWord = isHasExpectWord || chunk.includes(expectWord);
      });
      response.on('end', () => {
        if (isHasExpectWord) {
          return res.status(200).json('Access Success ');
        }
        return res.status(400).json('not Access');
      });
      response.on('error', () => (res.status(400).json('not Access ja')));
    });
  },
};

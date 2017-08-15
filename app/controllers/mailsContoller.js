const nodemailer = require('nodemailer');
const config = require('../../config/config');

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
};

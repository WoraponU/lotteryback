const nodemailer = require('nodemailer');
// const smtpTransport = require('nodemailer-smtp-transport');

module.exports = {
  sendMail: (req, res) => {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'worapon.p@hobbiz.co.th',
        pass: 'Critical38',
      },
    });

    console.log('created');
    transporter.sendMail({
      from: 'hobbiz@gmail.com',
      to: 'woraponok@gmail.com',
      subject: 'hello world!',
      text: 'hello world!',
    });
    res.status(200).json('eiei');
  },
};

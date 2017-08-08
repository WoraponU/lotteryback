module.exports = {
  secretKey: process.env.SECRET_KEY,
  port: process.env.NODE_PORT || 3000,

  mailHost: process.env.MAIL_HOST,
  mailHostPassword: process.env.MAIL_HOST_PASSWORD,
};

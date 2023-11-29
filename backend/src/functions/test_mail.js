const { google } = require('googleapis');
const nodemailer = require('nodemailer');
require('dotenv').config();


module.exports.testMail = () => {

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          type: "OAuth2",
          clientId: process.env.clientId,
          clientSecret: process.env.clientSecret,
        },
      });
      
      transporter.sendMail({
        from: process.env.from,
        to: process.env.to,
        subject: "Message",
        text: "I hope this message gets through!",
        auth: {
          user: process.env.from,
          refreshToken: process.env.refreshToken,
          accessToken: process.env.accessToken,
          expires: 148,
        },
      });
}
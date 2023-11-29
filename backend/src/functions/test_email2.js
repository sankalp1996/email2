const nodemailer = require('nodemailer');
require('dotenv').config();
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

module.exports.testMail2 = async (name,email,feedback) => {
//   const oauth2Client = new google.auth.OAuth2(
//     process.env.clientId,
//     process.env.clientSecret,
//     'http://localhost:3001' // Redirect URL
//   );

//   oauth2Client.setCredentials({
//     refresh_token: process.env.refreshToken
//   });

  try {
    // const accessToken = await oauth2Client.getAccessToken();

    const  transporter = await nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.USER_EMAIL,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        // accessToken: accessToken.token,
      }
    });

    const mailOptions = {
      from: process.env.USER_EMAIL,
      // to: process.env.to,
      to: email,
      subject: 'Message',
      text: feedback ? feedback :  'I hope this message gets through!'
    };
    console.log('mail opt:', mailOptions);


    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent:', result);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

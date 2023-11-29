const express = require('express');
const nodemailer = require('nodemailer');

module.exports.smtp = () => {
  let transport = nodemailer.createTransport({
    // host: 'smtp.gmail.com',
    host: "smtp.forwardemail.net",
    port: 465,
    secure: true, // use TLS
    auth: {
      user: 'amitemailtest96@gmail.com',
      pass: 'pankaj@123',
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: 'amitemailtest96@gmail.com',
    to: 'amitfutela96@gmail.com',
    subject: 'Test Email',
    text: 'This is a test email from Nodemailer with SMTP!',
  };

  // Send mail with defined transport object
  transport.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error('Error occurred:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

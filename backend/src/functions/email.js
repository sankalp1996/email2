const express = require("express");
const nodemailer = require("nodemailer");

module.exports.myMailer = () => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 587,
    secure: false,
    auth: {
      user: 'amitemailtest96@gmail.com', // Your SendGrid username
      pass: 'pankaj@123' // Your SendGrid password
    }
  });

  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: "<amitemailtest96@gmail.com>", // sender address
      to: "amitfutela96@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
  }

  main().catch(console.error);
};


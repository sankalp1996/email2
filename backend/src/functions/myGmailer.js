const express = require("express");
const nodemailer = require("nodemailer");

module.exports.myGmailer = () => {
  const mailTransporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: "amitemailtest96@gmail.com",
      clientId:
        "808945222494-rp3d2btetus2dnbh1i3n5me5q6fokhvc.apps.googleusercontent.com",
      clientSecret: "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",
      refreshToken:
        "1//0gwMyuOwC0ImgCgYIARAAGBASNwF-L9IruZoE-vCl7nesRuaXaqNK9SY4DNZTvuYCOgPSYppotqVAbfQ85C8PfPCXk30-oTbgXWU",
      accessToken:
        "ya29.a0AfB_byB2540qvfLyrSb1v2h8i2T-JgPDOTyNrKc86CvtsB9Ppy4gvX3q9cVK7xKNhp5F6UG539cw1n3x-tszuaNtTpF3FdTLi066sXjOhRsMIE-Ck15fqbIB0TZslPww0f_BB1sCpWYzAXtwYy2qjjfDkMa62t7sRSkEaCgYKARESARASFQHGX2MiKx0zEnTxFBof8qtBkbhZ_w0171",
      expires: 1484314697598,
    },
  });

  const details = {
    from: "<amitemailtest96@gmail.com>", // sender address
    to: "amitfutela96@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
  };

  mailTransporter.sendMail(details, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("email sent");
    }
  });
};

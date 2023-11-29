const { response } = require("express");
const contactModel = require("../model/contactModel");
const { testMail2 } = require("../functions/test_email2");

//Add account*****************************************************
module.exports.addContact = async (req, res) => {
  const { name, email, mob, address, feedback } = req.body;
  console.log("req.body found - ",req.body);

  try {
    const add = await contactModel.create({
      name,
      email,
      mob,
      address,
      feedback,
    });
    
    testMail2(name,email,feedback);
    res
      .status(200)
      .send({ status: "Success", message: "Contact created", data: add });
  } catch (err) {
    res.status(500).send({ status: "error in controller-mail.js=>", error: err.message });
  }
};

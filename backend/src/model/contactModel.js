const mongoose = require("mongoose");
const contactModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: false,
    lowercase: true,
  },
  mob: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
    lowercase: true,
  },
});

module.exports = mongoose.model("contact", contactModel);

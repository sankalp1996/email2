const mongoose = require("mongoose");
const uri = "mongodb://127.0.0.1:27017/email";

async function con() {
  console.log("Connnection Start");
  try {
    const connection = await mongoose.connect(uri);
    console.log(
      "Connection Successfull",
      connection.connection.host,
      connection.connection.name
    );
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

module.exports = con;





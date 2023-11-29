const express = require("express");
const http = require("http");
const connectdb = require("./src/connection/db.js");
const routes = require("./src/routes/routes.js");
const cors = require("cors");
const { myMailer } = require("./src/functions/email.js");
const { myGmailer } = require("./src/functions/myGmailer.js");
const { testMail } = require("./src/functions/test_mail.js");
const { smtp } = require("./src/functions/smtp.js");
const { testMail2 } = require("./src/functions/test_email2.js");
require('dotenv').config();

const app = express();
const PORT = 3001;

const server = http.createServer(app);
app.use(cors());
connectdb();
app.use(express.json());
app.use(routes);

let test = process.env.test_env;
app.get("/", (req, res) => {
  res.send(test);
  console.log(".env - ",process.env.REACT_APP_TITLE)
});

app.get("/email", (req, res) => {
  console.log("email testing");
  // myGmailer();
// myMailer();
// testMail();
testMail2();
// smtp();



});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

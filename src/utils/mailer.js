// importamos nodemailer
const nodemailer = require("nodemailer");
// necesitaremos la contasenia de applicacion
require("dotenv").config();

// creamos nuestro transportador

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: "465",
  secure: true,
  auth: {
    user: "segr30398481@gmail.com",
    pass: process.env.G_PASSWORD,
  },
});

module.exports = transporter;

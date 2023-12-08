const nodemailer = require("nodemailer");
require('dotenv').config();

async function sendMail(mailOptions){
    try {
        const transporter = nodemailer.createTransport({
            host: 'sandbox.smtp.mailtrap.io',
            port: 2525,
            auth: {
                user: process.env.MAIL_EMAIL,
                pass: process.env.MAIL_PASSWORD
            }
        });
        // define email options
        let details = await transporter.sendMail(mailOptions);
        console.log("Message sent: %s", details.messageId);

    } catch (error) {
        console.log(error);
        return error;
    }
}

module.exports = sendMail;
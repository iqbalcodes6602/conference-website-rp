// Set up nodemailer transport
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SENDER_EMAIL, // Your email
        pass: process.env.SENDER_EMAIL_PASSWORD, // Your email password
    },
});


const sendAccountVerificationMail = async (email, otp) => {
    // try {
        await transporter.sendMail({
            to: email,
            subject: 'Verify your email',
            text: `Your OTP for verification is ${otp}`,
        });
    // } catch (error) {
    //     console.error('Error sending email:', error);
    // }
}

module.exports = { sendAccountVerificationMail };
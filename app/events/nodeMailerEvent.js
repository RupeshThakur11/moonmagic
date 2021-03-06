const nodemailer = require('nodemailer');

// Generate SMTP service account from ethereal.email
/* nodemailer.createTestAccount((err, account) => {
    console.log(account);
    if (err) {
        console.error('Failed to create a testing account. ' + err.message);
        return process.exit(1);
    } */

const mailer = (data) => {
  // Create a SMTP transporter object
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'tothenewrt@gmail.com',
      pass: 'R8860979460@',
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // Message object
  const message = {
    from: 'angularman@gmail.com',
    to: `${data.firstName} <${data.email}>`,
    subject: `${data.subject}`,
    text: ` ${data.message}`,
    html: `<p>${data.message}</p>`,
  };

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log(`Error occurred. ${err.message}`);
      return process.exit(1);
    }

    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });
};
module.exports = {
  mailer,
};

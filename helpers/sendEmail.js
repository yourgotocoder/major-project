const nodeOutlook = require("nodejs-nodemailer-outlook");

const sendMail = (config) => {
    nodeOutlook.sendEmail({
        auth: {
          user: process.env.EMAIL_ID,
          pass: process.env.EMAIL_PASSWORD,
        },
        from: process.env.EMAIL_ID,
        to: config.emailTo,
        subject: config.emailSubject,
        html: emailContent,
        onError: (e) => console.log(e),
        onSuccess: (i) => console.log(i),
      });
}

module.exports = sendMail;
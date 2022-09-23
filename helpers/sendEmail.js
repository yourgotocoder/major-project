const nodeOutlook = require("nodejs-nodemailer-outlook");

const sendMail = (config) => {
    nodeOutlook.sendEmail({
        auth: {
          user: process.env.EMAIL_ID,
          pass: process.env.EMAIL_PASSWORD,
        },
        from: process.env.EMAIL_ID,
        cc: config.cc,
        to: config.emailTo,
        subject: config.emailSubject,
        html: config.emailContent,
        onError: (e) => console.log(e),
        onSuccess: (i) => console.log(i),
      });
}

module.exports = sendMail;
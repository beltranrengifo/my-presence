const nodemailer = require('nodemailer')

const mailer = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  }
})

const configureEmail = (result) => ({
  from: `🤖 Belt from Github Woffu Action ${process.env.EMAIL}`,
  to: 'beltran.rengifo@liferay.com',
  subject: '⚡ Woffu Action ⚡',
  text: `
    Hi Belt, you pirate!! 🏴‍☠️
    Woffu action just happened, here's the result:

    👉 Request Status: ${result.status}
    👉 Request Status Text: ${result.statusText}
    👉 Sign-in event Id: ${result.signEventId}

    Have fun! 🤪
  `
})

const sendEmail = (result) => {
  mailer.sendMail(configureEmail(result), (error, info) => {
    if (error) {
        console.log({
          emailSuccess: false,
          error,
        })

    } else {
      console.log({
        emailSuccess: true,
        info,
      })
    }
  });
}

module.exports = sendEmail
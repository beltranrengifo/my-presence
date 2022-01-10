const nodemailer = require('nodemailer')

const mailer = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
})

const configureEmail = (result, to) => ({
  from: `🤖 ${process.env.USER_NAME} from Github Woffu Action ${process.env.EMAIL}`,
  to,
  subject: '⚡ Woffu Action ⚡',
  text: `
    Hi ${process.env.USER_NAME}, you pirate!! 🏴‍☠️
    Woffu action just happened, here's the result:

    👉 Request Status: ${result.status}
    👉 Request Status Text: ${result.statusText}
    👉 Sign-in event Id: ${result.signEventId || 'NOT SUCCESSFUL :('}

    Have fun! 🤪
  `,
})

const sendEmail = ({ result, to }) => {
  mailer.sendMail(configureEmail(result, to), (error, info) => {
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
  })
}

const handleEmails = (result) => {
  const emails = process.env.RECIPIENTS.split(',').map((email) => email.trim())

  emails.forEach((email) => {
    sendEmail({ result, to: email })
  })
}

module.exports = handleEmails

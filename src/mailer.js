const nodemailer = require('nodemailer')

const mailer = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
})

const configureEmail = (result, to) => ({
  from: `ðĪ ${process.env.USER_NAME} from Github Woffu Action ${process.env.EMAIL}`,
  to,
  subject: `âĄ Woffu Action âĄ${
    !result.signEventId ? ' | NOT SUCCESSFUL :(' : ''
  }`,
  text: `
    Hi ${process.env.USER_NAME}, you pirate!! ðīââ ïļ
    Woffu action just happened, here's the result:

    ${!result.signEventId ? 'ðĻ ACTION NOT SUCCESSFUL ðĻ' : ''}

    ð Request Status: ${result.status}
    ð Request Status Text: ${result.statusText}
    ð Sign-in event Id: ${
      result.signEventId || 'Sign-in event NOT SUCCESSFUL :('
    }

    Have fun! ðĪŠ
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

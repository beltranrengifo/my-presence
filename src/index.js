const togglePresence = require('./toggle-presence')
const sendEmail = require('./mailer')

console.log({token: process.env.WOFFU_TOKEN, user: process.env.WOFFU_USER_ID})

/* togglePresence()
  .then(({
    status,
    statusText,
    signEventId,
  }) => {
    sendEmail({
      status,
      statusText,
      signEventId,
    })

    console.log({
      'Request Status': status,
      'Request Status Text': statusText,
      'Sign-in event Id': signEventId,
    })
  })
  .catch(({
    status,
    statusText
  }) => {
    sendEmail({
      status,
      statusText,
    })

    console.error({
      'Request Error Status': status,
      'Request Error Status Text': statusText,
    })
  }) */

const togglePresence = require('./toggle-presence')
const sendEmail = require('./mailer')

togglePresence()
  .then(({ status, statusText, signEventId }) => {
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
  .catch(({ status, statusText }) => {
    sendEmail({
      status,
      statusText,
    })

    console.error({
      'Request Error Status': status,
      'Request Error Status Text': statusText,
    })
  })

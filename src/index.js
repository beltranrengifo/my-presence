const togglePresence = require('./toggle-presence')
const handleEmails = require('./mailer')

togglePresence()
  .then(({ status, statusText, signEventId }) => {
    handleEmails({ status, statusText, signEventId })

    console.log({
      'Request Status': status,
      'Request Status Text': statusText,
      'Sign-in event Id': signEventId,
    })
  })
  .catch(({ status, statusText }) => {
    handleEmails({
      status,
      statusText,
    })

    console.error({
      'Request Error Status': status,
      'Request Error Status Text': statusText,
    })
  })

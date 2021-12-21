const togglePresence = require('./toggle-presence')

togglePresence()
  .then(({
    status,
    statusText,
    signEventId,
  }) => {
    console.log(
      {
        'Request Status': status,
        'Request Status Text': statusText,
        'Sign-in event Id': signEventId,
      }
    )
  })
  .catch(({
    status,
    statusText
  }) => {
    console.error(
      {
        'Request Error Status': status,
        'Request Error Status Text': statusText,
      }
    )
  })

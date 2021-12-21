const WoffuClient = require('./api')

WoffuClient.post('/', WOFFU_CONFIG.data)
  .then(({
    status,
    statusText,
    data: { signEventId } = {}
  } = {}) => {
    console.log({
      'Request Status': status,
      'Request Status Text': statusText,
      'Sign-in event Id': signEventId
    })
  })
  .catch(({response}) => {
    console.warn(
      response.status,
      response.statusText,
    )
  })

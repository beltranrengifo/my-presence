const WoffuClient = require('./api')
const { data } = require('./config')

WoffuClient.post('/', data)
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

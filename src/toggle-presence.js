const WoffuClient = require('./api')
const { data } = require('./config')

const togglePresence = () => {
  return WoffuClient.post('/', data)
  .then(({
    status,
    statusText,
    data: { signEventId } = {}
  } = {}) => {
    return {
      status,
      statusText,
      signEventId,
    }
  })
  .catch(({response}) => {
    return {
      status: response.status,
      statusText: response.statusText,
    }
  })
}

module.exports = togglePresence
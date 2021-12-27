const { data, headers, url } = require('./config')
const WoffuClient = require('./http-client')({ headers, url })

const togglePresence = () => {
  return WoffuClient.post('/', data)
    .then(({ status, statusText, data: { signEventId } = {} } = {}) => {
      return {
        status,
        statusText,
        signEventId,
      }
    })
    .catch(({ response }) => {
      return {
        status: response.status,
        statusText: response.statusText,
      }
    })
}

module.exports = togglePresence

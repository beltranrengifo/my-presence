const http = require('axios')

const DEFAULT_TIMEOUT = 3000

const HttpClient = ({
  headers = null,
  url = null,
  timeout = DEFAULT_TIMEOUT
}) => {
  if (!headers || !url) {
    throw new Error('Undefined configuration in HttpClient component (http-client.js)')
  }

  return http.create({
    baseURL: url,
    timeout,
    headers: headers
  })
}

module.exports = HttpClient
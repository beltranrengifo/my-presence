const http = require('axios')

const DEFAULT_TIMEOUT = 3000

const HttpClient = ({ headers, url, timeout = DEFAULT_TIMEOUT }) => {
  return http.create({
    baseURL: url,
    timeout,
    headers: headers
  })
}

module.exports = HttpClient
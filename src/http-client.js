const http = require('axios')
const { headers, url } = require('./config')

const HttpClient = http.create({
  baseURL: url,
  timeout: 3000,
  headers: headers
});

module.exports = HttpClient
const http = require('axios')
const { headers, url } = require('./config')

const WoffuClient = http.create({
  baseURL: url,
  timeout: 3000,
  headers: headers
});

module.export = WoffuClient
const http = require('axios')
const WOFFU_CONFIG = require('./config')

const WoffuClient = http.create({
  baseURL: WOFFU_CONFIG.url,
  timeout: 3000,
  headers: WOFFU_CONFIG.headers
});

module.export = WoffuClient
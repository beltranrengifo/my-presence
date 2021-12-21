const http = require('axios')
const { USER, TOKEN } = require('./secrets')

const WOFFU_CONFIG = {
  url: 'https://liferay.woffu.com/api/svc/signs/signs',
  data: {
    UserId: USER,
    DeviceId: 'WebApp'
  },
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    'Content-Type': 'application/json;charset=utf-8'
  }
}

const WoffuClient = http.create({
  baseURL: WOFFU_CONFIG.url,
  timeout: 3000,
  headers: WOFFU_CONFIG.headers
});

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

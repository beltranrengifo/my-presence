const { USER, TOKEN } = require('./secrets')
console.log({token: process.env.WOFFU_TOKEN, user: process.env.WOFFU_USER_ID})

const WOFFU_CONFIG = {
  url: 'https://liferay.woffu.com/api/svc/signs/signs',
  data: {
    UserId: process.env.WOFFU_USER_ID,
    DeviceId: 'WebApp'
  },
  headers: {
    Authorization: `Bearer ${process.env.WOFFU_TOKEN}`,
    'Content-Type': 'application/json;charset=utf-8'
  }
}

module.exports = WOFFU_CONFIG
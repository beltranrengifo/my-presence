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

module.exports = WOFFU_CONFIG
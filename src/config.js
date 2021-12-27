const WOFFU_CONFIG = {
  url: process.env.WOFFU_ENDPOINT,
  data: {
    UserId: process.env.WOFFU_USER_ID,
    DeviceId: 'WebApp',
  },
  headers: {
    Authorization: `Bearer ${process.env.WOFFU_TOKEN}`,
    'Content-Type': 'application/json;charset=utf-8',
  },
}

module.exports = WOFFU_CONFIG

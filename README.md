# My presence

Schedule HTTP requests to automate presence check-ins & check-outs in Woffu app.

## Usage

Clone & push or fork the repo

Visit `Settings > Secrets` section and complete the following **required** values

- EMAIL: The sender email used for sending notifications, ie. `test@test.com`
- EMAIL_PASSWORD: The password of the mentioned email, ie. `1234`
- EMAIL_SERVICE: The service used, needed for Nodemailer config, ie. `gmail`
- RECIPIENT: The email will receive the notifications, ie. `my-mail@test.com`
- USER_NAME: Your name, used in the notifications, ie. `John Doe`
- WOFFU_ENDPOINT: The URL the app should point to. Inspect a request in your browser doing a check-in to get it, ie. `https://liferay.woffu.com/api/svc/signs/signs`
- WOFFU_TOKEN: Your user token from Woffu. Inspect a request in your browser after login to get it
- WOFFU_USER_ID: Your user id from Woffu. Inspect a request in your browser after login to get it

Review & adjust the schedule settings in `.github/workflows/presence.yml`

- Check [Crontab Guru](https://crontab.guru/) in case you need help with the cron configs.

Modify the email content of the notification if you will in `src/mailer.js`

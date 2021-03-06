[![Handle Presence in my Woffu Account](https://github.com/beltranrengifo/my-presence/actions/workflows/presence.yml/badge.svg?branch=main)](https://github.com/beltranrengifo/my-presence/actions/workflows/presence.yml)

# My presence

Schedule HTTP requests to automate presence check-ins & check-outs in Woffu app.

## Usage and configuration

Clone & push or fork the repo

Visit `Settings > Secrets` section and complete the following **required** values

- EMAIL: The sender email used for sending notifications, ie. `test@test.com`
- EMAIL_PASSWORD: The password of the mentioned email, ie. `1234`
- EMAIL_SERVICE: The service used, needed for [Nodemailer config](https://nodemailer.com/smtp/well-known/), ie. `gmail`
- RECIPIENTS: The email/emails, separated by commas, will receive the notifications, ie. `my-mail@test.com, my-second-mail@test.com`
- USER_NAME: Your name, used in the notifications, ie. `John Doe`
- WOFFU_ENDPOINT: The URL the app should point to. Inspect a request in your browser doing a check-in to get it, ie. `https://liferay.woffu.com/api/svc/signs/signs`
- WOFFU_TOKEN: Your user token from Woffu. Inspect a request in your browser after login to get it
- WOFFU_USER_ID: Your user id from Woffu. Inspect a request in your browser after login to get it

Review & adjust the schedule settings, if needed, here: `.github/workflows/presence.yml`

- Check [Crontab Guru](https://crontab.guru/) in case you need help with the cron configs.

Modify the email content of the notification, if you will, here: `src/mailer.js`

You can enable/disable the action in _Actions > Handle Presence in my Woffu Account_

## Limitations

Github Actions Schedule is not so accurate as it should, expect some random time variations on the triggers.

Github Actions still does not support timezones, we have to manually take care of this, once per year.

# a1-notify

Use different techniques to notify an event (alarm, trigger)

Available methods: beep, email, web push notification.

## Usage

> Typescript is also available

No configuration required.

```javascript
const notify = require('a1-notify')
notify.beep()
```

## API

- **beep()**: Beep sound in the current computer.
- **async rest(url, message)**: Send an HTTP POST message.
- **async push(url, message, token?)**: Send a web push notification. Token is optional for restricted push messages.
- **async email(to, subject, message)**: Send an email message. process.env.USER_EMAIL and process.env.USER_PW must be set before sending email.
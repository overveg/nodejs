/**
 * How to use nodemailer with gmail
 * https://blog.mailtrap.io/nodemailer-gmail/
 */

module.exports = { send }

const { createTransport } = require('nodemailer')

async function send(to, subject, text) {
  const user = process.env.USER_EMAIL
  const pass = process.env.USER_PW
  if (!user && !pass) throw Error('Add USER_EMAIL and USER_PW env variables before sending email')
  const mail = createTransport({ service: 'Gmail', auth: { user, pass } })
  await mail.sendMail({ from: user, to, subject, text })
}

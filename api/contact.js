const express = require('express')
const validator = require('validator')
const xssFilters = require('xss-filters')

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
const CONTACT_TO_ADDRESS = process.env.CONTACT_TO_ADDRESS
const CONTACT_FROM_ADDRESS = process.env.CONTACT_FROM_ADDRESS
const CONTACT_SUBJECT = process.env.CONTACT_SUBJECT

const Sendgrid = require('sendgrid')(SENDGRID_API_KEY)
const app = express()

app.use(express.json())

app.get('/', function(req, res) {
  res.status(405).json({ error: 'Not allowed.' })
})

app.post('/', function(req, res) {
  const attributes = ['name', 'phone', 'email', 'message']
  const sanitizedAttributes = attributes.map((n) =>
    validateAndSanitize(n, req.body[n])
  )
  const someInvalid = sanitizedAttributes.some((r) => !r && r.length > 0)

  if (someInvalid) {
    return res.status(422).json({ error: 'Invalid input.' })
  }

  return sendMail(...sanitizedAttributes, res)
})

const validateAndSanitize = (key, value) => {
  const rejectFunctions = {
    name: (v) => !v || v.length === 0,
    phone: (v) => false,
    email: (v) => !v || !validator.isEmail(v),
    message: (v) => !v || v.length === 0
  }

  return (
    rejectFunctions.hasOwnProperty(key) &&
    !rejectFunctions[key](value) &&
    xssFilters.inHTMLData(value)
  )
}

const sendMail = (name, phone, email, message, res) => {
  const sgReq = Sendgrid.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: {
      personalizations: [
        {
          to: [{ email: CONTACT_TO_ADDRESS }],
          subject: CONTACT_SUBJECT
        }
      ],
      from: { email: CONTACT_FROM_ADDRESS },
      reply_to: { email, name },
      content: [
        {
          type: 'text/plain',
          value: message + ' / ' + phone + ' / ' + email
        }
      ]
    }
  })

  return Sendgrid.API(sgReq, (err) => {
    if (err) {
      return res.status(418).json({ error: err })
    }

    return res.status(200).json({ message: 'sent' })
  })
}

module.exports = {
  path: '/api/contact',
  handler: app
}

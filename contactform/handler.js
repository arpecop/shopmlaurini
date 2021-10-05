const serverless = require('serverless-http')
const express = require('express')
const cors = require('cors')
const app = express()
const AWS = require('aws-sdk')
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  sessionToken: process.env.AWS_SESSION_TOKEN,
  region: 'eu-central-1'
})
const ses = new AWS.SES({ region: 'eu-central-1' })

app.use(cors())
app.all('/', async (req, res, next) => {
  var params = {
    Destination: {
      ToAddresses: ['rudix.lab@gmail.com']
    },
    Message: {
      Body: {
        Text: { Data: req.body.toString() }
      },
      Subject: { Data: 'Поръчка' }
    },
    Source: 'rudix.lab@gmail.com'
  }

  ses.sendEmail(params, function (err, data) {
    console.log(err, data)
    res.json(err)
  })
})

module.exports.handler = serverless(app)

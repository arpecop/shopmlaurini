const serverless = require('serverless-http')
const express = require('express')
const app = express()
const AWS = require('aws-sdk')
const sesClient = new AWS.SES()
const sesConfirmedAddress = 'rudix.lab@gmail.com'

app.all('/', (req, res, next) => {
  res.json(req.body)

  var emailObj = JSON.parse(req.body)
  var params = getEmailMessage(emailObj)
  var sendEmailPromise = sesClient.sendEmail(params).promise()

  sendEmailPromise
    .then(function (result) {
      console.log(result)
      res.json(response)
    })
    .catch(function (err) {
      res.json(response)
    })
})

module.exports.handler = serverless(app)

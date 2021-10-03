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
      callback(null, response)
    })
    .catch(function (err) {
      console.log(err)
      response.statusCode = 500
      callback(null, response)
    })
})

module.exports.handler = serverless(app)

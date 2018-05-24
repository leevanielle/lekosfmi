{ Meteor } = require 'meteor/meteor'
{ FlowRouter } = require 'meteor/kadira:flow-router'
{ Session } = require 'meteor/session'
{ Tracker } = require 'meteor/tracker'

AWS = require 'aws-sdk'

console.log Meteor.settings.aws.s3

AWS.config.update
  region: Meteor.settings.aws.s3.region
  accessKeyId: Meteor.settings.aws.s3.accessKeyId
  secretAccessKey: Meteor.settings.aws.s3.accessSecretKey

s3 = new AWS.S3()
# Bucket names must be unique across all S3 users

myBucket = Meteor.settings.aws.s3.bucket
myKey = 'arn:aws:s3:::lekosfmi-personal'


s3.createBucket Bucket: myBucket, (err, data) ->
  if err
    console.log err

  params = Bucket: myBucket, Key: myKey, Body: 'Hello!'

  s3.putObject params, (err, data) ->
    if err
      console.log err

    console.log "Successfully uploaded data to #{data}"

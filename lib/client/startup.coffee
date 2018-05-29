{ Meteor } = require 'meteor/meteor'
{ FlowRouter } = require 'meteor/kadira:flow-router'
{ Session } = require 'meteor/session'
{ Tracker } = require 'meteor/tracker'

Meteor.startup ->
  console.log "Welcome, to my personal portfolio."

  # console.log Meteor.settings.public.aws
  #
  # AWS.config.update
  #   region: Meteor.settings.public.aws.region
  #   accessKeyId: Meteor.settings.public.aws.accessKeyId
  #   secretAccessKey: Meteor.settings.public.aws.accessSecretKey
  #
  # s3 = new AWS.S3()
  # # Bucket names must be unique across all S3 users
  #
  # myBucket = Meteor.settings.public.aws.s3.bucketName
  # myKey = Meteor.settings.public.aws.s3.bucketKey
  #
  #
  # s3.createBucket Bucket: myBucket, (err, data) ->
  #   if err
  #     console.log err
  #
  #   params = Bucket: myBucket, Key: myKey, Body: 'Hello!'
  #
  #   s3.putObject params, (err, data) ->
  #     if err
  #       console.log err
  #
  #     console.log "Successfully uploaded data to #{data}"

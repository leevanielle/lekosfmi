import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { Messages } from '../../collections/collections'

import { check } from 'meteor/check'


Meteor.methods({
  'messages.insert'(firstName, lastName, email, message) {
    check(firstName, String)
    check(lastName, String)
    check(email, String)
    check(message, String)
    Messages.insert({
      firstName, lastName, email, message,
      createdAt: new Date()
    })
  }
})

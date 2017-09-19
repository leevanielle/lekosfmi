import { Email } from 'meteor/email'
import { check } from 'meteor/check'

Meteor.methods({
  'send.email'(firstName, lastName, email, message) {

    check([firstName, lastName, email, message], [String])

    this.unblock()

    Email.send({
      from: '<lephanvanielle@gmail.com>',
      to: 'lephanvanielle@gmail.com',
      subject: "Lekosfmi's Form",
      text: `${lastName}, ${firstName} - [${email}]: ${message}`
    })
  }
})

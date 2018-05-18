import { Email } from 'meteor/email'
import { check } from 'meteor/check'
import { EmailList } from '../../collections/collections';

function isValidEmail(address) {
  return /^[A-Z0-9'.1234z_%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(address);
};

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
  },

  'email-list.insert'(email) {

    check([email], [String])

    if(!isValidEmail(email)) {
      return Meteor.Error('That email was invalid. Please try again with a different email.')
    }

    let emailInDB = EmailList.findOne({ email })
    if (emailInDB && emailInDB.email === email) {
      return Meteor.Error('We found a matching email in our record. Please try again with a different email')
    }

    this.unblock()


    return EmailList.insert({ email });

    // Email.send({
    //   from: '<lephanvanielle@gmail.com>',
    //   to: 'lephanvanielle@gmail.com',
    //   subject: "Lekosfmi's Form",
    //   text: `${lastName}, ${firstName} - [${email}]: ${message}`
    // })
  }
})

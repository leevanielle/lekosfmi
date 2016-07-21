{ Meteor } = require 'meteor/meteor'
{ Template } = require 'meteor/templating'

Template.footer.helpers
  copyright: ->

    # get the current year
    date = new Date()
    year = date.getFullYear()

    # printing copyright() along with year
    "© #{year} Vanielle Le"

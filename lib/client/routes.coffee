{ BlazeLayout } = require 'meteor/kadira:blaze-layout'
{ FlowRouter } = require 'meteor/kadira:flow-router'

FlowRouter.route '/',
  action: (params) ->
    BlazeLayout.render 'app', main: 'home'

import { Meteor } from 'meteor/meteor'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { Session } from 'meteor/session'
import { Tracker } from 'meteor/tracker'


Meteor.startup(() => {
  Tracker.autorun(() => {
    FlowRouter.watchPathChange()
    Session.set('currentRoute', FlowRouter.current().path)
  })
})

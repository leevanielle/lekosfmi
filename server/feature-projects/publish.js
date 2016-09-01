import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { FeatureProjects } from '../../collections/collections'


Meteor.publish('featureProjects', function featureProjectsPublication() {
  return FeatureProjects.find()
})

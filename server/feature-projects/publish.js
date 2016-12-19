import { Meteor } from 'meteor/meteor'
import { FeatureProjects } from '../../collections/collections'


Meteor.publish('featureProjects', function projectsPublication() {
    return FeatureProjects.find()
})

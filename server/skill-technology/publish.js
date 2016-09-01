import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { SkillTechnology } from '../../collections/collections'


Meteor.publish('skillTechnology', function skillTechnologyPublication() {
  return SkillTechnology.find()
})

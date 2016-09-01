import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { SkillLanguages } from '../../collections/collections'


Meteor.publish('skillLanguages', function skillLanguagesPublication() {
  return SkillLanguages.find()
})

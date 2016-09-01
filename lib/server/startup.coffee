{ Meteor } = require 'meteor/meteor'
{ Mongo } = require 'meteor/mongo'

# Collections
{ FeatureProjects, SkillLanguages, SkillTechnology } = require '../../collections/collections.js'

# Seeds
{ seedFeatureProjects, seedSkillLanguages, seedSkillTechnology } = require './seed.coffee'


Meteor.startup ->

  if FeatureProjects.find().count() is 0
    FeatureProjects.insert(s) for s in seedFeatureProjects

  if SkillLanguages.find().count() is 0
    SkillLanguages.insert(s) for s in seedSkillLanguages

  if SkillTechnology.find().count() is 0
    SkillTechnology.insert(s) for s in seedSkillTechnology

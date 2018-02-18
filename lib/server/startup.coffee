{ Accounts } = require 'meteor/accounts-base'
{ Meteor } = require 'meteor/meteor'
{ Mongo } = require 'meteor/mongo'

# Collections
{
  FeatureProjects,
  Images,
  SkillLanguages,
  SkillTechnology
} = require '../../collections/collections.js'

# Seeds
{
  seedFeatureProjects,
  seedImages,
  seedSkillLanguages,
  seedSkillTechnology
} = require './seed.coffee'


Meteor.startup ->

  # Email smpt
  process.env.MAIL_URL = 'smtps://lephankoby.meteor%40gmail.com:sehqpbztzzfvlyas@smtp.gmail.com:465/'

  # Reset collections
  FeatureProjects.remove({}) if FeatureProjects.find().count() > 0
  Images.remove({}) if Images.find().count() > 0
  SkillLanguages.remove({}) if SkillLanguages.find().count() > 0
  SkillTechnology.remove({}) if SkillTechnology.find().count() > 0

  # Insert after reset
  if FeatureProjects.find().count() is 0
    FeatureProjects.insert(s) for s in seedFeatureProjects

  if Images.find().count() is 0
    Images.insert(s) for s in seedImages

  if SkillLanguages.find().count() is 0
    SkillLanguages.insert(s) for s in seedSkillLanguages

  if SkillTechnology.find().count() is 0
    SkillTechnology.insert(s) for s in seedSkillTechnology

{ Accounts } = require 'meteor/accounts-base'
{ Meteor } = require 'meteor/meteor'
{ Mongo } = require 'meteor/mongo'

# Collections
{ FeatureProjects, Pokemons, SkillLanguages, SkillTechnology } = require '../../collections/collections.js'

# Seeds
{ seedFeatureProjects, seedPokemons, seedSkillLanguages, seedSkillTechnology } = require './seed.coffee'


Meteor.startup ->

  # Email smpt
  process.env.MAIL_URL = 'smtp://lephankoby.meteor%40gmail.com:sehqpbztzzfvlyas@smtp.gmail.com:465/'

  # Reset collections
  FeatureProjects.remove({}) if FeatureProjects.find().count() > 0
  SkillLanguages.remove({}) if SkillLanguages.find().count() > 0
  SkillTechnology.remove({}) if SkillTechnology.find().count() > 0

  # Insert after reset
  if FeatureProjects.find().count() is 0
    FeatureProjects.insert(s) for s in seedFeatureProjects

  if Pokemons.find().count() is 0
    Pokemons.insert(s) for s in seedPokemons

  if SkillLanguages.find().count() is 0
    SkillLanguages.insert(s) for s in seedSkillLanguages

  if SkillTechnology.find().count() is 0
    SkillTechnology.insert(s) for s in seedSkillTechnology

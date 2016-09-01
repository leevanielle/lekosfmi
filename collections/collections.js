import { Mongo } from 'meteor/mongo'

export const FeatureProjects = new Mongo.Collection('featureProjects')

export const Messages = new Mongo.Collection('messages')

export const SkillLanguages = new Mongo.Collection('skillLanguages')

export const SkillTechnology = new Mongo.Collection('skillTechnology')

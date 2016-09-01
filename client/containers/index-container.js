// Import main components / modules
import React, { Component, PropTypes } from 'react'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import { Mongo } from 'meteor/mongo'

// Import collections
import {
  FeatureProjects,
  Messages,
  SkillLanguages,
  SkillTechnology
} from '../../collections/collections.js'

// Import components
import { Index } from '../ui/pages/index/index.jsx'
import { App } from '../app/app.jsx'


export default IndexContainer = createContainer((props) => {
  Meteor.subscribe('featureProjects')
  Meteor.subscribe('skillLanguages')
  Meteor.subscribe('skillTechnology')

  const projects = FeatureProjects.find().fetch()
  const languages = SkillLanguages.find().fetch()
  const technologies = SkillTechnology.find().fetch()

  return { projects, languages, technologies }
}, Index)

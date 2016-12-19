import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

// Import page
import IndexPage from '../ui/pages/index/index.jsx'

// Import collections
import {
  FeatureProjects,
  SkillLanguages,
  SkillTechnology
} from '../../collections/collections'


export default IndexContainer = createContainer(() => {

  Meteor.subscribe('featureProjects')
  Meteor.subscribe('skillLanguages')
  Meteor.subscribe('skillTechnology')

  return {
      projects: FeatureProjects.find({}).fetch(),
      languages: SkillLanguages.find({}).fetch(),
      technologies: SkillTechnology.find({}).fetch()
  }

}, IndexPage)

import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'

// Import page
import IndexPage from '../ui/pages/index/index.jsx'

// Import collections
import {
  FeatureProjects,
  SkillLanguages,
  SkillTechnology
} from '../../collections/collections'


export default IndexContainer = withTracker(prop => {

  Meteor.subscribe('featureProjects')
  Meteor.subscribe('skillLanguages')
  Meteor.subscribe('skillTechnology')

  return {
    projects: FeatureProjects.find({}).fetch(),
    languages: SkillLanguages.find({}).fetch(),
    technologies: SkillTechnology.find({}).fetch()
  }
})(IndexPage)

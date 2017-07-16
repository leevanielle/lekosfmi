import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

// Import page
import PhotographyPage from '../ui/pages/photography/photography.jsx'

// Import collections
import { Images } from '../../collections/collections'


export default PhotographyContainer = createContainer(() => {

  Meteor.subscribe('images')

  return {
    images: Images.find({}).fetch()
  }

}, PhotographyPage)

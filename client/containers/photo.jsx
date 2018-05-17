import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'

// Import page
import PhotoPage from '../ui/pages/photo/photo.jsx'

// Import collections
import { Images } from '../../collections/collections'


export default PhotoContainer = withTracker(params => {

  Meteor.subscribe('images')

  return {
    image: Images.findOne({ _id: params.imageId })
  }

}, PhotoPage)

import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

// Import page
import PhotoPage from '../ui/pages/photo/photo.jsx'

// Import collections
import { Images } from '../../collections/collections'


export default PhotoContainer = createContainer(params => {

  Meteor.subscribe('images')

  return {
    image: Images.findOne({ _id: params.imageId })
  }

}, PhotoPage)

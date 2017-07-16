import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { Images } from '../../collections/collections'


Meteor.publish('images', function imagesPublication() {
  return Images.find()
})

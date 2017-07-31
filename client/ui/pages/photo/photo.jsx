// Import main components / modules
import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import React, { Component } from 'react'
import { render } from 'react-dom'


export default class PhotoPage extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // console.log('Hello from Photo Page')
    // console.log('Image Id: ', this.props.imageId)
    // console.log('My Images', this.props)
  }

  renderImage() {
    let image = this.props && this.props.image;

    if (image) {
      console.log(image)
      return (<img src={image.src} alt={image.name} />)
    }
  }

  render() {
    return (
      <div id="photo-page">
        {this.renderImage()}

        <h1>Hello World, Photo Page</h1>
      </div>
    )
  }
}

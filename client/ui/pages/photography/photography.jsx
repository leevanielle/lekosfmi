// Import main components / modules
import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import React, { Component } from 'react'
import { render } from 'react-dom'


export default class PhotographyPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filterIndex: 0,
      filterStyle: [
        '',
        'grayscale(100%)',
        'sepia(100%)',
        'contrast(4)',
        'blur(5px)',
        'saturate(8)',
        'hue-rotate(90deg)',
        'invert(.8)',
        'drop-shadow(16px 16px 10px rgba(0,0,0,0.9))'
      ]
    }
  }

  onIncrementFilterIndex() {
    if (this.state.filterIndex < this.state.filterStyle.length) {
      this.setState({ filterIndex: this.state.filterIndex + 1 })
    } else {
      this.setState({ filterIndex: 0 })
    }

    console.log(this.state.filterIndex)
  }

  onGetRoutingID(id) {
    FlowRouter.go(`/photography/${id}`)
  }

  renderFilterStyle() {
    return {
      'filter': this.state.filterStyle[this.state.filterIndex]
    }
  }

  renderImages() {
    return this.props.images.map((image, idx) => {
      return (<img key={idx}
                   alt={image.name}
                   src={image.src}
                   onClick={this.onGetRoutingID.bind(this, image._id)}
                   style={this.renderFilterStyle()}
              />)
    });
  }

  render() {
    return (
      <div id="photography-page">
        <div id="images">
          {this.renderImages()}
        </div>
      </div>
    )
  }
}

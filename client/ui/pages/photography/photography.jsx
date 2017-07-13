// Import main components / modules
import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import React, { Component } from 'react'
import { render } from 'react-dom'

let images = [
  {
    key: 1,
    name: 'Palace of Fine Arts',
    src: 'https://res.cloudinary.com/pixmi/image/upload/v1499921817/lchewlce0iypdlmvh8lo.jpg'
  },
  {
    key: 2,
    name: 'Clarion Alley - Look Up',
    src: 'https://res.cloudinary.com/pixmi/image/upload/v1499921965/mnjr7bzmbi2zgstnutm8.jpg'
  },
  {
    key: 3,
    name: '',
    src: 'https://res.cloudinary.com/pixmi/image/upload/v1499550680/bihrvd9kv4wx8o2wbwjg.jpg'
  },
  {
    key: 4,
    name: '',
    src: 'https://res.cloudinary.com/pixmi/image/upload/v1499549872/lpimzpdlidfirbyhtl4z.jpg'
  },
  {
    key: 5,
    name: 'Clarion Alley - Portrait Transgender',
    src: 'https://res.cloudinary.com/pixmi/image/upload/v1499922303/su4cupibmfssvln5ropf.jpg'
  },
  {
    key: 6,
    name: 'Santa Monica Beach Swing',
    src: 'https://res.cloudinary.com/pixmi/image/upload/v1499922043/zv2afkyrdrcep5g4ohud.jpg'
  },
  {
    key: 7,
    name: 'Oklahoma City Look Up',
    src: 'https://res.cloudinary.com/pixmi/image/upload/v1499922172/nrsd1xpd3bjwbvs15eox.jpg'
  },
  {
    key: 8,
    src: 'https://res.cloudinary.com/pixmi/image/upload/v1499550336/oubhxhuollmtzfghed4v.jpg'
  },
  {
    key: 9,
    src: 'https://res.cloudinary.com/pixmi/image/upload/v1499550695/t6pvlpmtswsefpqsehim.jpg'
  },
  {
    key: 10,
    src: 'https://res.cloudinary.com/pixmi/image/upload/v1499550680/bihrvd9kv4wx8o2wbwjg.jpg'
  },
  {
    key: 11,
    src: 'https://res.cloudinary.com/pixmi/image/upload/v1499922362/krbe6ewm3sisi8osit2k.jpg'
  }
];

export default class PhotographyPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images,
      filterIndex: 0,
      filterStyle: [
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

    console.log(this.state.filterIndex);
  }


  renderFilterStyle() {
    return {
      'filter': this.state.filterStyle[this.state.filterIndex]
    }
  }

  renderImages() {
    return this.state.images.map(image => {
      return (<img key={image.key}
                   alt={image.name}
                   src={image.src}
                   onClick={this.onIncrementFilterIndex.bind(this)}
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

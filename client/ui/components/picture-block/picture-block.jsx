// import main components
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'


export default class PictureBlock extends Component {
  render() {
    return (
      <a id="picture-block"
         href={this.props.link}
         className={this.props.size}
         target="_blank"
         style={{background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ),
                              url(${this.props.src})
                              center center`}}>

        <h2 className="img-title">{this.props.title}</h2>
        <p className="description">{this.props.description}</p>
      </a>
    )
  }
}

// declaring propTypes
React.propTypes = {
  size: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
  src: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired
}

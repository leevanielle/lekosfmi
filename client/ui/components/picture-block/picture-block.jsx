// import main components
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'


export default class PictureBlock extends Component {
  render() {
    return (
      <div className="col-md-4">
        <a className="text-center" href={this.props.link} target="_blank">
          <img src={this.props.src} className="img-responsive img-rounded" />
          <h2 className="img-title">{this.props.title}</h2>
          <p className="description">{this.props.description}</p>
        </a>
      </div>
    )
  }
}

// declaring propTypes
React.propTypes = {
  link: React.PropTypes.string.isRequired,
  src: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired
}

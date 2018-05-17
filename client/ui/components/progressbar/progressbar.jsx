// import main components / modules
import React, { Component } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'


export default class Progressbar extends Component {
  render() {
    return (
      <div id="progress-bar" className="container-fluid">

          <div className="progress">
            <h5>{this.props.name}</h5>
            <div id={this.props.progressId}
                 className="progress-bar"
                 style={this.props.style}></div>
        </div>
      </div>
    )
  }
}


Progressbar.propTypes = {
  progressId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired
}

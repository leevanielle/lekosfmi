// import main components / modules
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'


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


React.propTypes = {
  progressId: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  style: React.PropTypes.object.isRequired
}

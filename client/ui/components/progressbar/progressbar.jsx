// import main components / modules
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'


export default class Progressbar extends Component {
  render() {
    return (
      <div className="container-fluid">
          <h5 className="">{this.props.name}</h5>
          <div className="progress">
            <div id={this.props.progressId}
                 className="progress-bar"></div>
        </div>
      </div>
    )
  }
}


React.propTypes = {
  progressId: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired
}

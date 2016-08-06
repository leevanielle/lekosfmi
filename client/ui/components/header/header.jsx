// import main components
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

import { logoImg } from '../../../../imports/client/module'

export default class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="jumbotron">
          <div className="container-fluid">
            <div className="col-sm-6">
              <img id="logo" src={logoImg} className="img-circle" alt="logo" />
            </div>
            <div className="col-sm-6">
              <h1 className="title">{this.props.title}</h1>
              <p className="subtitle"><i>{this.props.subtitle}</i></p>
            </div>
            <p className="text-left">{this.props.about}</p>
          </div>
        </div>
      </header>
    )
  }
}

// declaring propTypes
React.propTypes = {
  link: React.PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}

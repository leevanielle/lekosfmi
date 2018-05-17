// import main components / modules
import React, { Component } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'


export default class Btn extends React.Component {
  render() {
    return (
      <button type={this.props.type}
              className={this.props.className}
              onClick={this.props.onClick}>{this.props.children}</button>
    )
  }
}

// Declaring propTypes
Btn.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

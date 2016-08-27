// import main components / modules
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'


export default class Btn extends React.Component {
  render() {
    return (
      <button type={this.props.type} className={this.props.className}>{this.props.name}</button>
    )
  }
}

// Declaring propTypes
React.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

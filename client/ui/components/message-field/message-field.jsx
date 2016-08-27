// import main components / modules
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'


export default class MessageField extends React.Component {
  render() {
    return (
      <div className="form-group">
        <textarea className="form-control"
                  name={this.props.name}
                  placeholder={this.props.placeholder}
                  rows="5"></textarea>
      </div>
    )
  }
}

// Declaring propTypes
React.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string
}

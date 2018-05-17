// import main components / modules
import React, { Component } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'


export default class MessageField extends React.Component {
  render() {
    return (
      <div className="form-group">
        <textarea className="form-control"
                  name={this.props.name}
                  placeholder={this.props.placeholder}
                  onFocus={this.props.onFocus}
                  rows="5"></textarea>
      </div>
    )
  }
}

// Declaring propTypes
MessageField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onFocus: PropTypes.func
}

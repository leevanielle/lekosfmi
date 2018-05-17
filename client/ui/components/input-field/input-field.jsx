// import main components / modules
import React, { Component } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'


export default class InputField extends Component {
  render() {
    return (
      <div className="form-group">
        <input type={this.props.type}
               className="form-control"
               name={this.props.name}
               placeholder={this.props.placeholder}
               onFocus={this.props.onFocus}
               onBlur={this.props.onBlur}
               onChange={this.props.onChange}
               autoComplete="new-password"
               value={this.props.value} />
      </div>
    )
  }
}

// Declaring propTypes
InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func
}

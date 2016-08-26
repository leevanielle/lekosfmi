// import main components / modules
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'


export default class InputField extends Component {
  constructor(props) {
    super(props)
    this.state = { } // from model
  }

  render() {
    return (
      <div className="form-group">
        <input type={this.props.type}
               className="form-control"
               placeholder={this.props.placeholder} />
      </div>
    )
  }
}

// Declaring propTypes
React.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string
}

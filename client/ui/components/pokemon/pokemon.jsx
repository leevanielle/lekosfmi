// Import main components / modules
import { Meteor } from 'meteor/meteor'
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'


export default class Pokemon extends Component {
  render() {
    return (
      <div>
        <div id="pokemon" style={this.props.poke}></div>
      </div>
    )
  }
}

React.propTypes = {
  poke: PropTypes.object
}

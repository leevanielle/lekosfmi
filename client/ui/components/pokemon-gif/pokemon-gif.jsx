// Import main components / modules
import { Meteor } from 'meteor/meteor'
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'


export default class PokemonGif extends Component {
  render() {
    return (
      <div>
          <img id="pokemon-gif" src={this.props.url} />
      </div>
    )
  }
}

React.propTypes = {
  url: PropTypes.string.isRequired
}

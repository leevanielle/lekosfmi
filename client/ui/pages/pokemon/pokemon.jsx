// Import main components / modules
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React, { Component } from 'react'
import { render } from 'react-dom'

// Import custom components
import PokeDropdown from '../../components/poke-dropdown/poke-dropdown.jsx'
import PokeList from '../../components/poke-list/poke-list.jsx'
import PokemonGif from '../../components/pokemon-gif/pokemon-gif.jsx'

// Import collections
import { Pokemons } from '../../../../collections/collections.js'


export default class Pokemon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokeUrl: 'http://www.pokestadium.com/sprites/xy/rayquaza.gif'
    }
  }

  renderPokemon(name) {
    if (name) {
      let pokeName = name.toLowerCase()
      let pokeUrl = `http://www.pokestadium.com/sprites/xy/${pokeName}` + '.gif'

      this.setState({ pokeUrl })
    }
  }

  renderPokeDropdown() {
    return this.props.pokemons.map((p) => {
      return <PokeList key={p._id}
                       name={p.name}
                      onClick={this.renderPokemon.bind(this, p.name)} />
    })
  }

  render() {
    return (
      <div>
        <header className="jumbotron">
          <PokemonGif url={this.state.pokeUrl} />
        </header>

        <PokeDropdown renderPokeDropdown={this.renderPokeDropdown()} />
      </div>
    )
  }
}

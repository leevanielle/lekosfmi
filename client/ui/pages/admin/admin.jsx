// Import main components / modules
import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react'
import { render } from 'react-dom'

// Import custom components
import PageHeader from '../../components/page-header/page-header.jsx'
import PokeDropdown from '../../components/poke-dropdown/poke-dropdown.jsx'
import PokeList from '../../components/poke-list/poke-list.jsx'
import Pokemon from '../../components/pokemon/pokemon.jsx'

// Pokemon Model
const pokemon = [
  {
    _id: Meteor.uuid(),
    name: 'Charizard',
    url: 'http://www.pokestadium.com/sprites/xy/charizard.gif'
  },
  {
    _id: Meteor.uuid(),
    name: 'Rayquaza',
    url: 'http://www.pokestadium.com/sprites/xy/rayquaza.gif'
  },
  {
    _id: Meteor.uuid(),
    name: 'Pikachu',
    url: 'http://www.pokestadium.com/sprites/xy/pikachu.gif'
  },
  {
    _id: Meteor.uuid(),
    name: 'Ho-Oh',
    url: 'http://www.pokestadium.com/sprites/xy/ho-oh.gif'
  },
  {
    _id: Meteor.uuid(),
    name: 'Yveltal',
    url: 'http://www.pokestadium.com/sprites/xy/yveltal.gif'
  }
]


export default class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = { pokemon }
  }

  componentDidMount() {
    // transparent navbar for admin page only
    $('.navbar').css({ background: 'transparent' })
  }

  inputFocus() {
    if (screen.width >= 768) {
      $('.container-fluid').animate({ 'margin-bottom': 80 })
    }
  }

  blurFocus() {
    $('.container-fluid').animate({ 'margin-bottom': 15 })
  }

  handleClick(event, name) {
    event.preventDefault()
    var el = event.target
    console.log('li item clicked!');
  }

  renderPokeDropdown() {
    return this.state.pokemon.map((p) => {
      return <PokeList key={p._id}
                       name={p.name}
                       onClick={this.handleClick.bind(this)} />
    })
  }

  render() {
    return (
      <div id="admin">

        <header className="jumbotron">

        </header>

        <PokeDropdown renderPokeDropdown={this.renderPokeDropdown()} />

        <div className="container-fluid">
          <PageHeader title="Admin" />
          <form>
            <div className="form-group">
              <input type="password"
                     className="form-control"
                     autoComplete="off"
                     placeholder="Please Type in the Keycode"
                     onFocus={this.inputFocus}
                     onBlur={this.blurFocus}/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

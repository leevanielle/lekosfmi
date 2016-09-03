// Import main components / modules
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React, { Component } from 'react'
import { render } from 'react-dom'

// Import custom components
import Pokemon from '../pokemon/pokemon.jsx'
import InputField from '../../components/input-field/input-field.jsx'
import PageHeader from '../../components/page-header/page-header.jsx'


export default class Admin extends Component {
  componentDidMount() {
    $('.navbar').css({ background: 'transparent' })
  }

  inputFocus() {
    if (screen.width >= 768) {
      $('.container-fluid').animate({ 'margin-bottom': 80 })
    }
  }

  inputBlur() {
    $('.container-fluid').animate({ 'margin-bottom': 15 })
  }

  handleInput(e) {
    e.preventDefault()
    let hashcode = e.target.value
    if (hashcode === "Kobydanny7") {
      console.log('Success!')
    }
  }

  render() {
    return (
      <div id="admin">

        <Pokemon />

        <div className="container-fluid">
          <PageHeader title="Admin" />

            <InputField type="password"
                        placeholder="Please Type in the Keycode"
                        onFocus={this.inputFocus}
                        onBlur={this.inputBlur}
                        onChange={this.handleInput.bind(this)} />
        </div>
      </div>
    )
  }
}

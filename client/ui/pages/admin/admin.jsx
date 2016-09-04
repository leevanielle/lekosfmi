// Import main components / modules
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React, { Component } from 'react'
import { render } from 'react-dom'

// Import custom components
import Btn from '../../components/btn/btn.jsx'
import Pokemon from '../pokemon/pokemon.jsx'
import InputField from '../../components/input-field/input-field.jsx'
import PageHeader from '../../components/page-header/page-header.jsx'


export default class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = { username: '', password: '' }
  }

  componentDidMount() {
    $('.navbar').css({ background: 'transparent' })
  }

  handleUsername(e) {
    this.setState({ username: e.target.value })
  }

  handlePassword(e) {
    this.setState({ password: e.target.value })
  }

  handleForm(e) {
    e.preventDefault()

    let username = this.state.username
    let password = this.state.password

    if (username && password) {
      Meteor.loginWithPassword(username, password, (err) => {
        if (err) {
          console.log(err.reason)
        } else {
          console.log('Sucess')
        }
      })
    }
  }

  render() {
    return (
      <div id="admin">

        <Pokemon />

        <div className="container-fluid">
          <PageHeader title="Admin" />

          <form autoComplete="false" onSubmit={this.handleForm.bind(this)}>
             <InputField type="text"
                         name="username"
                         placeholder="Username"
                         onBlur={this.handleUsername.bind(this)} />

              <InputField type="password"
                          name="password"
                          placeholder="keycode"
                          onBlur={this.handlePassword.bind(this)} />

              <Btn type="submit" className="btn btn-default btn-submit pull-right" name="Submit" />
          </form>
        </div>
      </div>
    )
  }
}

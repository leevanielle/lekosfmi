// import main components / modules
import React, { Component } from 'react'
import { render } from 'react-dom'

// import custom components
import InputField from '../../components/input-field/input-field.jsx'
import MessageField from '../../components/message-field/message-field.jsx'
import PageHeader from '../../components/page-header/page-header.jsx'

export default class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = { } // from model
  }

  render() {
    return (
      <div id="contact-page" className="container">
        <PageHeader title="Contact Me" />
        <form>
          <div className="col-sm-6">
            <InputField type="text" placeholder="First Name" />
          </div>

          <div className="col-sm-6">
            <InputField type="text" placeholder="Last Name" />
          </div>

          <InputField type="email" placeholder="Email" />

          <MessageField placeholder="Message" />
        </form>
      </div>
    )
  }
}

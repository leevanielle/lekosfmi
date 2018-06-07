// import main components
import React, { Component } from 'react'
import { render } from 'react-dom'
import { Meteor } from 'meteor/meteor'


export default class EmailList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: ""
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    e.persist() // event synthetic

    let email = e.target.email.value

    if (!email) {
      return
    }

    Meteor.call('email-list.insert', email, (error, result) => {
      this.setState({
        message: "Thanks you, should be receiving your resume template shortly!"
      })
    })

    e.target.email.value = ''
  }

  resetMessage() {
    if (this.state.message === 0) {
      return
    }

    this.setState({ message: '' })
  }

  render() {
    return (
      <form id="email-list" onSubmit={this.handleSubmit.bind(this)}>

        <div className="page-header text-center">
          <h3>
            Enter your email below and I'll send you a <i>free</i> resume template.
          </h3>
          <small>No spam. Ever.</small>
          <p>{this.state.message ? this.state.message : null}</p>
          <div className="input-group">
            <input type="email"
                   name="email"
                   className="form-control"
                   aria-label="..."
                   placeholder="Enter email here..."
                   onChange={this.resetMessage.bind(this)} />
            <div className="input-group-btn">
              <button className="btn btn-default"
                      type="submit">
                <span className="glyphicon glyphicon-send"></span>
              </button>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

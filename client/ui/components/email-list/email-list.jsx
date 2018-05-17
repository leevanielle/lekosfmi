// import main components
import React, { Component } from 'react'
import { render } from 'react-dom'


export default class EmailList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: "Let's chat!" // default message
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    e.persist() // event synthetic

    let email = e.target.email.value

    if (email) {
      console.log('email ', email);
    }

    e.target.email.value = ''
  }

  render() {
    return (
      <form id="email-list" onSubmit={this.handleSubmit.bind(this)}>
        <div className="page-header text-center">
          <h3>Enter your email below and I'll send you a <i>free</i> resume template. <small>No spam. Ever.</small>
          <div className="input-group">
            <input type="text"
                   name="email"
                   className="form-control"
                   aria-label="..."
                   placeholder="Enter email here..."/>
            <div className="input-group-btn">
              <button className="btn btn-default"
                      type="submit">
                <span className="glyphicon glyphicon-send"></span>
              </button>
            </div>
          </div>
          </h3>
        </div>
      </form>
    )
  }
}

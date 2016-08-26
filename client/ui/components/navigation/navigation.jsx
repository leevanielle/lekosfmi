// import main components
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

let navLinks = [
  {
    _id: 0,
    url: '/',
    name: 'Home'
  },
  {
    _id: 1,
    url: '/contact',
    name: 'Contact'
  }
]

export default class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = { navLinks }
  }

  closeNavbar() {
    $('#navbar-mobile').collapse('hide')
  }

  renderLinks() {
    return this.state.navLinks.map((link) => {
      return (
        <li key={link._id}>
          <a href={link.url} onClick={this.closeNavbar}>{link.name}</a>
        </li>
      )
    })
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#navbar-mobile"
                    aria-expanded="false">

              <span className="glyphicon glyphicon-option-horizontal"></span>
            </button>
            <a className="navbar-brand" href="/">Lekosfmi</a>
          </div>

          <div className="collapse navbar-collapse" id="navbar-mobile">
            <ul className="nav navbar-nav navbar-right">
              {this.renderLinks()}
            </ul>
          </div>
        </div>
    </nav>
    )
  }
}

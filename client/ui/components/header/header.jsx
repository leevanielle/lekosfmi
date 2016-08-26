// import main components
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

import { logoImg } from '../../../../imports/client/module'

let about = <span>Welcome to my website. I am passionate about building elegant and robust software. I have experience in working with an array of programming languages––including HTML/CSS, JavaScript, and Python. My prefer web framework is <a href='https://meteor.com/' target="_blank">Meteor</a>. Currently, I am residing in Norman, Oklahoma. In my free time, I enjoy hanging out with friends, meeting new people, learning new things, and of course, coding</span>


export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { about }
  }

  render() {
    return (
      <header id="header">
        <div className="jumbotron">
          <div className="container-fluid">
            <div className="col-sm-6">
              <img id="logo" src={logoImg} className="img-circle" alt="logo" />
            </div>
            <div className="col-sm-6">
              <h1 className="title">Vanielle Le</h1>
              <p className="subtitle"><i>Software Engineer</i></p>
            </div>
            <p className="text-left">{this.state.about}</p>
          </div>
        </div>
      </header>
    )
  }
}

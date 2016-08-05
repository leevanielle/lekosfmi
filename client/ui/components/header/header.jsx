import React, { Component } from 'react'
import { render } from 'react-dom'

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="jumbotron">
          <div className="container-fluid">
            <div className="col-sm-6">
              <img id="logo" src="https://res.cloudinary.com/pixmi/image/upload/v1469046846/tifetpl7hv4btv8re4ay.png" className="img-circle" alt="logo" />
            </div>
            <div className="col-sm-6">
              <h1 className="title">Vanielle Le</h1>
              <p className="subtitle"><i>Full-Stack Engineer</i></p>
            </div>
            <p className="text-left">Welcome to my website. I am passionate about building elegant and robust software. I have experience in working with an array of programming languages––including HTML/CSS, JavaScript, and Python. My prefer web framework
            is <a href="http://meteor.com" target="_blank">Meteor</a>. Currently, I am residing in  Norman, Oklahoma. In my free time, I enjoy hanging out with friends, meeting new people, learning new things, and of course, coding.
            </p>
          </div>
        </div>
      </header>
    )
  }
}

// import main components / modules
import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'


export default class ProfessionalMedia extends Component {
  render() {
    return (
      <div id="professional-media">
        <div className="container-fluid text-center">
          <div className="col-sm-4">
          <a href="https://www.linkedin.com/in/lekosfmi" target="_blank">
            <img src="https://res.cloudinary.com/pixmi/image/upload/v1473564151/iptr2hmkjwor0knssycb.png" className="" width="90" />
            <h4>Linkedin</h4>
          </a>
          </div>
          <div className="col-sm-4">
            <a href="https://github.com/lekosfmi" target="_blank">
              <img src="https://res.cloudinary.com/pixmi/image/upload/v1472431059/hjivca1livqzpstg5d74.png" className="" width="80" />
              <h4>Github</h4>
            </a>
          </div>
          <div className="col-sm-4">
            <a href="https://www.hackerrank.com/lekosfmi" target="_blank">
              <img src="https://res.cloudinary.com/pixmi/image/upload/v1472431355/thdvjemsfmemnbdvosam.png" className="text-center" width="70" height="auto"/>
              <h4>Hacker Rank</h4>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

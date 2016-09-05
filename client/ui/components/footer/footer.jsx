// import main components
import React, { Component } from 'react'
import { render } from 'react-dom'


export default class Footer extends Component {
  copyright() {
    let date = new Date()
    let year = date.getFullYear()

    return `© ${year} Lekosfmi`
  }

  render() {
    return (
      <footer>
        <div className="container-fluid">
          <div className="col-md-6">
            <p>{this.copyright()}</p>
          </div>
          <div className="col-md-6">
            <p className="design">Developed by Lekosfmi <span className="glyphicon glyphicon-heart"></span></p>
          </div>
        </div>
      </footer>
    )
  }
}

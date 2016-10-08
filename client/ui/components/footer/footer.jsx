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
          <p className="design"><span className="glyphicon glyphicon-heart"></span> Developed by Lekosfmi <span className="glyphicon glyphicon-heart"></span></p>
        </div>
      </footer>
    )
  }
}

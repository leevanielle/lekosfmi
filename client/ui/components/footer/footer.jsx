import React, { Component } from 'react'
import { render } from 'react-dom'

export default class Footer extends Component {
  copyright() {

    let date = new Date()
    let year = date.getFullYear()

    return `© ${year} Vanielle Le`
  }

  render() {
    return (
      <footer>
        <div className="container">
          <p>{this.copyright()}</p>
        </div>
      </footer>
    )
  }
}

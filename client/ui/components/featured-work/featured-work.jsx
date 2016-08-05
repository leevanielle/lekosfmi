import React, { Component } from 'react'
import { render } from 'react-dom'

export default class FeaturedWork extends Component {
  render() {
    return (
      <div id="featured-work">
        <div className="container">
          <div className="page-header">
            <h1>Featured Work</h1>
          </div>
          <div className="col-md-4">
            <a className="text-center" href="http://pixmi.me" target="_blank">
              <img src="https://res.cloudinary.com/pixmi/image/upload/v1469298411/ney7y9aubqo3fs1jltk1.jpg" className="img-responsive img-rounded" alt="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera" />
              <h2 className="img-title">Pixmi</h2>
              <p className="description">Photo sharing app</p>
            </a>
          </div>
          <div className="col-md-4">
            <a className="text-center" href="http://prime-calculate.lekosfmi.com/" target="_blank">
              <img src="https://res.cloudinary.com/pixmi/image/upload/v1470099759/bbvkpew6dgdeop8rhzbf.png" className="img-responsive img-rounded" alt="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera" />
              <h2 className="img-title">Prime Calculate</h2>
              <p className="description">Determine whether a number is prime or composite</p>
            </a>
          </div>
          <div className="col-md-4">
            <a className="text-center" href="http://chat.lekosfmi.com/" target="_blank">
              <img src="https://res.cloudinary.com/pixmi/image/upload/v1469298410/yrgxuzdwmmwxuoxaado3.jpg" className="img-responsive img-rounded" alt="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera" />
              <h2 className="img-title">Chat App</h2>
              <p className="description">Small chat app inspired by Slack</p>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

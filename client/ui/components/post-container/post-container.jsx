// import main modules / components
import React, { Component } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'


export default class PostContainer extends Component {
  render() {
    return (
      <div id="post-container" className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">{this.props.title}
              <span className="panel-title pull-right">
              {this.props.date}
              </span>
            </h3>

          </div>
          <div className="panel-body">
              <p>{this.props.content}</p>
          </div>
        </div>
      </div>
    )
  }
}

PostContainer.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

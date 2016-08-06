// import main modules / components
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'


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

React.propTypes = {
  title: React.PropTypes.string.isRequired,
  content: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired
}

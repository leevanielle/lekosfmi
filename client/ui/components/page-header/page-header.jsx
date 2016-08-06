import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

export default class PageHeader extends Component {
  pageHeader() {
    // for id and className
    return "page-header"
  }

  render() {
    return (
      <div id={this.pageHeader()} className={this.pageHeader()}>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

React.propTypes = {
  title: PropTypes.string
}

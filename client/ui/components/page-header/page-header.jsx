// import main components
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

// import custom components
export default class PageHeader extends Component {
  pageHeader() {
    return "page-header" // for id and className
  }

  render() {
    return (
      <div id={this.pageHeader()} className={this.pageHeader()}>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

// declaring propTypes
React.propTypes = {
  title: PropTypes.string
}

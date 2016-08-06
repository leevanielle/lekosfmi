import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

import PageHeader from '../page-header/page-header.jsx'

export default class FeaturedWork extends Component {
  render() {
    return (
      <div id="featured-work">
        <div className="container">
          <PageHeader title={this.props.title} />
          {this.props.renderPictureBlock}
        </div>
      </div>
    )
  }
}

React.propTypes = {
  title: PropTypes.string.isRequired,
  renderPictureBlock: React.PropTypes.func
}

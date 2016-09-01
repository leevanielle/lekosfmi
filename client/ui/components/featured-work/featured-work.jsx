// import main components
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

// import custom components
import PageHeader from '../page-header/page-header.jsx'


export default class FeaturedWork extends Component {
  render() {
    return (
      <div id="featured-work">
        <div className="container-fluid">
          <PageHeader title={this.props.title} />
          {this.props.renderPictureBlock}
        </div>
      </div>
    )
  }
}

// declaring propTypes
React.propTypes = {
  title: PropTypes.string.isRequired,
  renderPictureBlock: React.PropTypes.func
}

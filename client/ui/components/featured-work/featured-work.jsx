// import main components
import React, { Component } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'

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
FeaturedWork.propTypes = {
  title: PropTypes.string.isRequired,
  renderPictureBlock: PropTypes.array
}

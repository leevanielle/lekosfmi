import React, { Component } from 'react'
import { render } from 'react-dom'

import Header from '../../components/header/header.jsx'
import FeaturedWork from '../../components/featured-work/featured-work.jsx'

export default class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <FeaturedWork />
        {this.props.name}
      </div>
    )
  }
}

import React, { Component } from 'react'
import { render } from 'react-dom'

import Footer from '../ui/components/footer/footer.jsx'

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.content}
        <Footer />
      </div>
    )
  }
}

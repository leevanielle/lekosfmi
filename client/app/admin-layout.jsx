// import main components
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

import Navigation from '../ui/components/navigation/navigation.jsx'

// import custom components
export default class AdminLayout extends Component {
  render() {
    return (
      <div>
        <Navigation />
        {this.props.content}
      </div>
    )
  }
}


React.propTypes = {

}

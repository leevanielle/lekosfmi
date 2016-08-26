// import main components
import React, { Component } from 'react'
import { render } from 'react-dom'

// import custom components
import Header from '../ui/components/header/header.jsx'
import GoogleAnalytics from '../ui/components/google-analytics/google-analytics.jsx'
import Navigation from '../ui/components/navigation/navigation.jsx'
import Footer from '../ui/components/footer/footer.jsx'


export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        {this.props.content}
        <Footer />
        <GoogleAnalytics />
      </div>
    )
  }
}

// import main components
import React, { Component } from 'react'
import { render } from 'react-dom'

// import custom components
import Footer from '../ui/components/footer/footer.jsx'


export default class App extends Component {
  GoogleAnalytics() {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-48975683-10', 'auto');
    ga('send', 'pageview');
  }

  render() {
    return (
      <div>
        {this.props.content}
        <Footer />

        {this.GoogleAnalytics()}
      </div>
    )
  }
}

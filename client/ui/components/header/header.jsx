// import main components
import { FlowRouter } from 'meteor/kadira:flow-router'
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { Session } from 'meteor/session'

// import custom modules
import { logoImg } from '../../../../imports/client/module'


export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = { about: 'Hello World' } // default
    }

    renderAbout() {
        let text = <span>I am passionate about building elegant and robust software. I have experienced in working with an array of programming languages and frameworks––including JavaScript (Node), <a href="http://rubyonrails.org/">Ruby on Rails</a>, and Python. My prefer web framework is <a href='https://meteor.com/' target="_blank">Meteor</a>. Currently, I am residing in San Jose, California, and working as a software engineer at <a href="https://advocate.io/">Advocate</a>.</span>

        if (FlowRouter.current().path === '/') {
            return (<p className="text-left">{text}</p>)
        }
    }

    render() {
        return (
            <header id="header">
              <div className="jumbotron">
                <div className="container-fluid">
                  <div className="col-sm-6 text-center">
                    <img id="logo" src={logoImg} className="img-circle" alt="logo" />
                  </div>
                  <div className="col-sm-6">
                    <h1 className="title">Vanielle Le</h1>
                    <p className="subtitle"><i>Software Engineer</i></p>
                  </div>
                  {this.renderAbout()}
                </div>
              </div>
            </header>
        )
    }
}

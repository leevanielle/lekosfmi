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
        this.state = { about: '' } // default
    }

    renderAbout() {
        let text = <span>
                    I'm a full-stack software engineer with a passion for building great products.
                    My tendency is towards the front-end where I love to develop intuitive UI/UX experience.
                    I strive to consistently learn and improve my skills.
                    Additionally, I am fluent in a number of programming languages and frameworks––including JavaScript, <a href='https://meteor.com/' target="_blank">Meteor</a>, and Python.
                    Currently, I am residing in San Francisco, California, and working as a software engineer at <a href="https://advocate.io/" target="_blank">Advocate</a>.
                   </span>

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

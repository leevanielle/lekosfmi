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
                    I am fluent in a number of programming languages––including JavaScript and Python.
                    The frameworks and libraries I have experiences in include <a href="https://angular.io" target="_blank">Angular</a>, <a href="https://facebook.github.io/react/" target="_blank">React</a>, and <a href="http://flask.pocoo.org/" target="_blank">Flask</a>.
                    Currently, I am residing in <a href="https://www.google.com/maps?q=mountain+view+california&um=1&ie=UTF-8&sa=X&ved=0ahUKEwiP5fGqgKPTAhXKwVQKHdkkCIUQ_AUICCgB" target="_blank">Mountain View, California</a>, and working as a software engineer at <a href="https://archsys.io/" target="_blank">Arch Systems</a>.
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
                    <img id="logo" src={logoImg} className="img-circle" alt="logo" />
                    <p className="subtitle">Software Engineer</p>
                  {/* {this.renderAbout()} */}
                </div>
              </div>
            </header>
        )
    }
}

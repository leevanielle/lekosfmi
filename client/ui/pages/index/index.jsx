import React, { Component } from 'react'
import { render } from 'react-dom'

import { logoImg } from '../../../../imports/client/module'

import Header from '../../components/header/header.jsx'
import FeaturedWork from '../../components/featured-work/featured-work.jsx'
import PictureBlock from '../../components/picture-block/picture-block.jsx'


export default class Index extends Component {
  about() {
    let link = <a href='https://meteor.com/' target="_blank">Meteor</a>

    return <span>Welcome to my website. I am passionate about building elegant and robust software. I have experience in working with an array of programming languages––including HTML/CSS, JavaScript, and Python.
    My prefer web framework is {link}. Currently, I am residing in Norman, Oklahoma. In my free time, I enjoy hanging out with friends, meeting new people, learning new things, and of course, coding</span>
  }

  pictures() {
    return <div>
    <PictureBlock link="http://pixmi.me/"
                  src="https://res.cloudinary.com/pixmi/image/upload/v1469298411/ney7y9aubqo3fs1jltk1.jpg"
                  title="Pixmi"
                  description="Photo sharing app" />

    <PictureBlock link="http://prime-calculate.lekosfmi.com/"
                  src="https://res.cloudinary.com/pixmi/image/upload/v1470099759/bbvkpew6dgdeop8rhzbf.png"
                  title="Prime Calculate"
                  description="Determine whether a number is prime or composite" />

    <PictureBlock link="http://chat.lekosfmi.com/"
                  src="https://res.cloudinary.com/pixmi/image/upload/v1469298410/yrgxuzdwmmwxuoxaado3.jpg"
                  title="Chat App"
                  description="Small chat app inspired by Slack" /> </div>
  }

  render() {
    return (
      <div>
        <Header logoImg={logoImg}
                title="Vanielle Le"
                subtitle="Software Engineer"
                about={this.about()} />

        <FeaturedWork title="Featured Project" renderPictureBlock={this.pictures()}/>
      </div>
    )
  }
}

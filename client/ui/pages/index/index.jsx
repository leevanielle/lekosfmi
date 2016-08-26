// import main components / modules
import React, { Component } from 'react'
import { render } from 'react-dom'

// import custom components
import FeaturedWork from '../../components/featured-work/featured-work.jsx'
import PictureBlock from '../../components/picture-block/picture-block.jsx'

// model
let projects = [
  {
    _id: 0,
    link: 'http://pixmi.me/',
    src: 'https://res.cloudinary.com/pixmi/image/upload/v1469298411/ney7y9aubqo3fs1jltk1.jpg',
    title: 'Pixmi',
    description: 'Photo sharing app'
  },
  {
    _id: 1,
    link: 'http://prime-calculate.lekosfmi.com/',
    src: 'https://res.cloudinary.com/pixmi/image/upload/v1470099759/bbvkpew6dgdeop8rhzbf.png',
    title: 'Prime Calculate',
    description: 'Determine whether a number is prime or composite'
  },
  {
    _id: 2,
    link: 'http://chat.lekosfmi.com/',
    src: 'https://res.cloudinary.com/pixmi/image/upload/v1469298410/yrgxuzdwmmwxuoxaado3.jpg',
    title: 'Chat App',
    description: 'Small chat app inspired by Slack'
  }
]


export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = { projects } // from model
  }

  renderProjects() { // render each project
    return this.state.projects.map((project) => {
      return <PictureBlock key={project._id}
                           size="col-md-4"
                           link={project.link}
                           src={project.src}
                           title={project.title}
                           description={project.description} />
    })
  }

  render() {
    return (
      <div>
        <FeaturedWork title="Featured Project" renderPictureBlock={this.renderProjects()} />
      </div>
    )
  }
}

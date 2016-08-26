// import main components / modules
import React, { Component } from 'react'
import { render } from 'react-dom'

// import custom components
import Header from '../../components/header/header.jsx'
import FeaturedWork from '../../components/featured-work/featured-work.jsx'
import PictureBlock from '../../components/picture-block/picture-block.jsx'

// model
let about = <span>Welcome to my website. I am passionate about building elegant and robust software. I have experience in working with an array of programming languages––including HTML/CSS, JavaScript, and Python. My prefer web framework is <a href='https://meteor.com/' target="_blank">Meteor</a>. Currently, I am residing in Norman, Oklahoma. In my free time, I enjoy hanging out with friends, meeting new people, learning new things, and of course, coding</span>
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
    this.state = { about, projects } // from model
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
        <Header title="Vanielle Le"
                subtitle="Software Engineer"
                about={this.state.about} />

        <FeaturedWork title="Featured Project"
                      renderPictureBlock={this.renderProjects()} />
      </div>
    )
  }
}

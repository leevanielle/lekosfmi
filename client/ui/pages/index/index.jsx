// import main components / modules
import React, { Component } from 'react'
import { render } from 'react-dom'

// import custom components
import FeaturedWork from '../../components/featured-work/featured-work.jsx'
import PageHeader from '../../components/page-header/page-header.jsx'
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

let languages = [
  {
    _id: 0,
    name: 'HTML/CSS'
  },
  {
    _id: 1,
    name: 'JavaScript / NodeJS'
  },
  {
    _id: 2,
    name: 'Python'
  },
  {
    _id: 3,
    name: 'Ruby'
  }
]

let technologies = [
  {
    _id: 0,
    name: 'Meteor'
  },
  {
    _id: 1,
    name: 'MongoDB'
  },
  {
    _id: 3,
    name: 'React'
  },
  {
    _id: 2,
    name: 'Webapp2'
  }
]


export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = { projects, languages, technologies } // from model
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

  renderLanguages() {
    return this.state.languages.map((language) => {
      return (
        <div key={language._id} className="container-fluid">
            <h5 className="">{language.name}</h5>
            <div className="progress">
              <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      )
    })
  }

  renderTechnologies() {
    return this.state.technologies.map((technology) => {
      return (
        <div key={technology._id} className="container-fluid">
            <h5 className="">{technology.name}</h5>
            <div className="progress">
              <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      )
    })
  }


  render() {
    return (
      <div>
        <FeaturedWork title="Featured Project" renderPictureBlock={this.renderProjects()} />

        <div id="skill-progress">
          <div className="container-fluid">


            <div className="col-sm-6">
              <PageHeader title="Language" />
              {this.renderLanguages()}
            </div>


            <div className="col-sm-6">
              <PageHeader title="Technology" />
              {this.renderTechnologies()}
            </div>

          </div>
        </div> {/* #skill-progress */}

      </div>
    )
  }
}

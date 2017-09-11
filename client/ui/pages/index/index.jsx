// Import main components / modules
import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import React, { Component } from 'react'
import { render } from 'react-dom'

// Import custom components
import FeaturedWork from '../../components/featured-work/featured-work.jsx'
import PageHeader from '../../components/page-header/page-header.jsx'
import PictureBlock from '../../components/picture-block/picture-block.jsx'
import Progressbar from '../../components/progressbar/progressbar.jsx'
import SkillProgress from '../../components/skill-progress/skill-progress.jsx'


export default class IndexPage extends Component {
  renderProjects() {
    return this.props.projects.map((p) => {
     return  <PictureBlock key={p._id}
                           size="col-md-6"
                           link={p.link}
                           src={p.src}
                           title={p.title}
                           description={p.description} />
    })
  }

  renderLanguages() {
    return this.props.languages.map((l) => {
      return (<Progressbar key={l._id} progressId={l._id} name={l.name} style={l.style} />)
    })
  }

  renderTechnologies() {
    return this.props.technologies.map((t) => {
      return (<Progressbar key={t._id} progressId={t._id} name={t.name} style={t.style} />)
    })
  }

  render() {
    return (
      <div>
        <FeaturedWork title="Featured Projects" renderPictureBlock={this.renderProjects()} />

        <SkillProgress renderLanguages={this.renderLanguages()} renderTechnologies={this.renderTechnologies()} />
      </div>
    )
  }
}

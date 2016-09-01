// Import main components / modules
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React, { Component } from 'react'
import { render } from 'react-dom'

// Import collections
import {
  FeatureProjects,
  Messages,
  SkillLanguages,
  SkillTechnology
} from '../../../../collections/collections.js'

// Import custom components
import FeaturedWork from '../../components/featured-work/featured-work.jsx'
import PageHeader from '../../components/page-header/page-header.jsx'
import PictureBlock from '../../components/picture-block/picture-block.jsx'
import Progressbar from '../../components/progressbar/progressbar.jsx'
import SkillProgress from '../../components/skill-progress/skill-progress.jsx'

//import IndexContainer from '../../../containers/index-container.js'

export default class Index extends Component {
  renderProjects() { // render each project
    return this.props.projects.map((p) => {
      return <PictureBlock key={p._id}
                           size="col-md-4"
                           link={p.link}
                           src={p.src}
                           title={p.title}
                           description={p.description} />
    })
  }

  activeScroll(_id, style) {
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
      $(`#${_id}`)
        .animate(style)
        .addClass("progress-bar-striped active")
      setTimeout(() => {
        $(`#${_id}`).removeClass("progress-bar-striped active")
      }, 1000)
    } else if ($(window).scrollTop() + $(window).height() != $(document).height()) {
      $(`#${_id}`)
        .css({width: '0%'})
        .removeClass("progress-bar-striped active")
    }
  }

  componentDidMount() {
    $(window).scroll(() => {
      this.props.languages.map((l) => {
        this.activeScroll(l._id, l.style)
      })

      this.props.technologies.map((t) => {
        this.activeScroll(t._id, t.style)
      })
    })
  }

  renderLanguages() { // render each language
    return this.props.languages.map((l) => {
      return (<Progressbar key={l._id} progressId={l._id} name={l.name} />)
    })
  }

  renderTechnologies() { // render each technology
    return this.props.technologies.map((t) => {
      return (<Progressbar key={t._id} progressId={t._id} name={t.name} />)
    })
  }

  render() {
    return (
      <div>
        <FeaturedWork title="Featured Project" renderPictureBlock={this.renderProjects()} />
        <SkillProgress renderLanguages={this.renderLanguages()} renderTechnologies={this.renderTechnologies()} />
      </div>
    )
  }
}


export default IndexContainer = createContainer(() => {
  Meteor.subscribe('featureProjects')
  Meteor.subscribe('skillLanguages')
  Meteor.subscribe('skillTechnology')

  const projects = FeatureProjects.find().fetch()
  const languages = SkillLanguages.find().fetch()
  const technologies = SkillTechnology.find().fetch()

  return { projects, languages, technologies }
}, Index)

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


        <FeaturedWork title="Passion Projects" renderPictureBlock={this.renderProjects()} />

        <div className="page-header text-center" style={{
          'border-top': '10px solid #000',
          'border-left': '30px solid #000',
          'border-right': '30px solid #000',
          'border-bottom': '1px solid #000',
          'padding': '2em',
          'margin': 0
        }}>
          <h3>Enter your email below and I'll send you a <i>free</i> resume template. <small>No spam. Ever.</small>
          <div className="input-group"
               style={{
                 'padding': '1em 8em 0 8em'
               }}>
            <input type="text"
                   className="form-control"
                   aria-label="..."
                   placeholder="Enter email here..."/>
            <div className="input-group-btn">
              <button className="btn btn-default"
                      style={{
                        'border-radius': '50%',
                        'width': '40px',
                        'height': '40px',
                        'margin': '0px 0px 0px 10px'
                      }}>
                <span className="glyphicon glyphicon-send"></span>
              </button>
            </div>
          </div>
          </h3>
        </div>


        <SkillProgress renderLanguages={this.renderLanguages()} renderTechnologies={this.renderTechnologies()} />
      </div>
    )
  }
}

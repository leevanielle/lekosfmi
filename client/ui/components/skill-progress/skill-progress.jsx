// import main components / modules
import React, { Component } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'

// import custom components
import PageHeader from '../../components/page-header/page-header.jsx'


export default class SkillProgress extends Component {
  render() {
    return (
      <div id="skill-progress">
        <div className="container-fluid">
          <div className="col-lg-12">
            <PageHeader title="Languages" />
            {this.props.renderLanguages}
          </div>
          <div className="col-lg-12">
            <PageHeader title="Technologies" />
            {this.props.renderTechnologies}
          </div>
        </div>
      </div>
    )
  }
}


SkillProgress.propTypes = {
  renderLanguages: PropTypes.array.isRequired,
  renderTechnologies: PropTypes.array.isRequired
}

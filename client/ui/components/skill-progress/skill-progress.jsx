// import main components / modules
import React, { Component, PropTypes} from 'react'
import { render } from 'react-dom'

// import custom components
import PageHeader from '../../components/page-header/page-header.jsx'


export default class SkillProgress extends Component {
  render() {
    return (
      <div id="skill-progress">
        <div className="container-fluid">
          <div className="col-lg-6">
            <PageHeader title="Language" />
            {this.props.renderLanguages}
          </div>
          <div className="col-lg-6">
            <PageHeader title="Technology" />
            {this.props.renderTechnologies}
          </div>
        </div>
      </div>
    )
  }
}


React.propTypes = {
  renderLanguages: React.PropTypes.func.isRequired,
  renderTechnologies: React.PropTypes.func.isRequired
}
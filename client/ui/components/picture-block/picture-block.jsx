// import main components
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'


export default class PictureBlock extends Component {
  render() {
    return (
      <div id="picture-block" className={this.props.size} style={{background: `url(${this.props.src}) center left fixed` }}>
        <a className="text-center" href={this.props.link} target="_blank">
          {/*}<img src={this.props.src} className="img-responsive img-rounded" /> */}
          <h2 className="img-title">{this.props.title}</h2>
          <p className="description">{this.props.description}</p>
        </a>
      </div>
    )
  }
}

// declaring propTypes
React.propTypes = {
  size: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
  src: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired
}

// import main components
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'


export default class PictureBlock extends Component {
  render() {
    return (
      <a href={this.props.link} target="_blank">
        <div id="picture-block"
           className={this.props.size}
           style={{background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ),
                                url(${this.props.src})
                                center center`}}>
                                
          <h2 className="img-title">{this.props.title}</h2>
          <p className="description">{this.props.description}</p>
        </div>
      </a>
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

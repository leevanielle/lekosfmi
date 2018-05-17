// import main components
import React, { Component } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'


export default class PictureBlock extends Component {
  render() {
    return (
      <a href={this.props.link} target="_blank">
        <div id="picture-block"
           className={this.props.size}

           style={{background: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ),
                                url(${this.props.src})
                                center center`}}
          >

          <h2 className="img-title">{this.props.title}</h2>
          <p className="description">{this.props.description}</p>
        </div>
      </a>
    )
  }
}

// declaring propTypes
PictureBlock.propTypes = {
  size: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

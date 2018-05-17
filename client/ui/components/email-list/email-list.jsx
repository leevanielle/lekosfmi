// import main components
import React, { Component } from 'react'
import { render } from 'react-dom'


export default class EmailList extends Component {

  render() {
    return (
      <div id="email-list">
        <div className="page-header text-center" style={{
          'border-top': '10px solid #000',
          'border-left': '30px solid #000',
          'border-right': '30px solid #000',
          'border-bottom': '1px solid #000',
          'padding': '2em',
          'margin': 0,
          'z-index': 10000,
          'position': 'relative',
          'background': 'white'
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
                <span style={{ 'right': '2px' }} className="glyphicon glyphicon-send"></span>
              </button>
            </div>
          </div>
          </h3>
        </div>
      </div>
    )
  }
}

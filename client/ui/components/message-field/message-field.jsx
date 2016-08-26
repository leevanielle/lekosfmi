import React from 'react'
import { Editor, EditorState } from 'draft-js'


export default class MessageField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: EditorState.createEmpty()
    }

    this.borderFocus = (on=true) => {
      let borderColor = (color) => $('.DraftEditor-root').css({ 'border-bottom': `2px solid ${color}` })
      on ? borderColor('#e44389') : borderColor('lightgrey')
    }

    this.onChange = (editorState) => this.setState({editorState})

    this.focus = () => this.borderFocus()

    this.onBlur = () => this.borderFocus(false)
  }

  render() {
    return (
      <div className="form-group" onClick={this.focus} >
        <Editor editorState={this.state.editorState}
                onChange={this.onChange}
                placeholder={this.props.placeholder}
                onBlur={this.onBlur}
                ref="editor" />
      </div>
    )
  }
}

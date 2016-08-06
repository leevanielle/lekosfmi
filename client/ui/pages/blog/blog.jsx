// import main modules / components
import React, { Component } from 'react'
import { render } from 'react-dom'

// import custom components
import Header from '../../components/header/header.jsx'
import FeaturedWork from '../../components/featured-work/featured-work.jsx'
import PostContainer from '../../components/post-container/post-container.jsx'

let text = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."

export default class Blog extends Component {
  render() {
    return (
      <div>
        <Header title="Blog"
                subtitle="Personal Thoughts, Discovery, and Moments"
                about="" />

        <FeaturedWork title="Recent Post" />

        <PostContainer title="Hello World Blog Post"
                        date="New Date"
                       content={text} />
      </div>
    )
  }
}

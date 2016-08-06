// import from main components / modules
import { FlowRouter } from 'meteor/kadira:flow-router'

import React from 'react'
import { mount } from 'react-mounter'

// import modules
import { title } from '../../imports/client/module'

// import custom components
import App from '../../client/app/app.jsx'
import Blog from '../../client/ui/pages/blog/blog.jsx'
import Index from '../../client/ui/pages/index/index.jsx'


/* Routes */
FlowRouter.route("/", { // Index
  action() {
    title('Welcome')
    mount(App, {
        content: (<Index />)
    })
  }
})

FlowRouter.route("/blog", { // Blog
  action() {
    title('Blog')
    mount(App, {
        content: (<Blog />)
    })
  }
})

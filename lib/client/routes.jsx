import { FlowRouter } from 'meteor/kadira:flow-router'

import React from 'react'
import { mount } from 'react-mounter'

import App from '../../client/app/app.jsx'
import Index from '../../client/ui/pages/index/index.jsx'

FlowRouter.route("/", {
  action() {
    mount(App, {
        content: (<Index />)
    })
  }
})

import { FlowRouter } from 'meteor/kadira:flow-router'

import React from 'react'
import { mount } from 'react-mounter'

import { title } from '../../imports/client/module'

import App from '../../client/app/app.jsx'
import Index from '../../client/ui/pages/index/index.jsx'
import Mommy from '../../client/ui/pages/mommy/mommy.jsx'

FlowRouter.route("/", {
  action() {
    title('Welcome')
    mount(App, {
        content: (<Index />)
    })
  }
})

FlowRouter.route("/mommy", {
  action() {
    title('Mommy ❤️') // with a <3
    mount(App, {
        content: (<Mommy />)
    })
  }
})

// Import from main components / modules
import { FlowRouter } from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'

// Import modules
import { title } from '../../imports/client/module'

// Import components
import AppLayout from '../../client/app/app-layout.jsx'
import AdminLayout from '../../client/app/admin-layout.jsx'

// Import pages
import Admin from '../../client/ui/pages/admin/admin.jsx'
import Contact from '../../client/ui/pages/contact/contact.jsx'
import Index from '../../client/ui/pages/index/index.jsx'


/* Routes */
FlowRouter.route("/", { // Index
  action() {
    title('Welcome')
    mount(AppLayout, { content: (<Index />) })
  }
})

FlowRouter.route("/contact", { // Contact
  action() {
    title('Contact')
    mount(AppLayout, { content: (<Contact />) })
  }
})

FlowRouter.route("/admin", { // Contact
  action() {
    title('Admin')
    mount(AdminLayout, { content: (<Admin />) })
  }
})

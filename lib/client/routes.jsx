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
import ContactPage from '../../client/ui/pages/contact/contact.jsx'
import PhotographyPage from '../../client/ui/pages/photography/photography.jsx'

// Import containers
import IndexContainer from '../../client/containers/index.jsx'
import PhotographyContainer from '../../client/containers/photography.jsx'


/* Routes */
FlowRouter.route("/", {
    action() {
        title('Home')
        mount(AppLayout, { container: (<IndexContainer />) })
    }
})

FlowRouter.route("/contact", {
    action() {
        title('Contact')
        mount(AppLayout, { content: (<ContactPage />) })
    }
})

FlowRouter.route("/photography", {
    action() {
        title('Photography')
        mount(AppLayout, { container: (<PhotographyContainer />) })
    }
})

FlowRouter.route("/admin", {
  action() {
    title('Admin')
    mount(AdminLayout, { container: (<Admin />) })
  }
})

FlowRouter.route("/register", {
  action() {
    title('Register')
    mount(AdminLayout, { container: (<Register />) })
  }
})

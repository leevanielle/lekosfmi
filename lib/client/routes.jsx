// Import from main components / modules
import { FlowRouter } from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'

// Import modules
import { title } from '../../imports/client/module'

// Import components
import AppLayout from '../../client/app/app-layout.jsx'

// Import pages
import ContactPage from '../../client/ui/pages/contact/contact.jsx'
import PhotographyPage from '../../client/ui/pages/photography/photography.jsx'

// Import containers
import IndexContainer from '../../client/containers/index.jsx'
import PhotographyContainer from '../../client/containers/photography.jsx'
import PhotoContainer from '../../client/containers/photo.jsx'


/* Routes */
FlowRouter.notFound = {
  action() {
    title('Home')
    mount(AppLayout, { container: (<IndexContainer />) })
  }
}

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

FlowRouter.route("/photography/:id", {
    action(params) {
        title('Photography')
        mount(AppLayout, { container: (<PhotoContainer imageId={params.id} />) })
    }
})

FlowRouter.route("/register", {
  action() {
    title('Register')
    mount(AdminLayout, { container: (<Register />) })
  }
})

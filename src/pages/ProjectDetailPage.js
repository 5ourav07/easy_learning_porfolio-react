import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import ProjectDetails from '../components/ProjectDetails/ProjectDetails'

export default class ProjectDetailPage extends Component {
  render() {
    return (
      <Fragment>
          <TopNavigation title='Project Details' />
          <PageTop pagetitle='Project Details' />
          <ProjectDetails />
          <Footer />
      </Fragment>
    )
  }
}

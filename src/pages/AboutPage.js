import React, { Component, Fragment } from 'react'
import AboutDescription from '../components/AboutDescription/AboutDescription'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import AboutMe from '../components/AboutMe/AboutMe'
import TopNavigation from '../components/TopNavigation/TopNavigation'

export default class AboutPage extends Component {
  render() {
    return (
      <Fragment>
          <TopNavigation title='About Us' />
          <PageTop pagetitle='About Us' />
          <AboutMe />
          <AboutDescription />
          <Footer />
      </Fragment>
    )
  }
}

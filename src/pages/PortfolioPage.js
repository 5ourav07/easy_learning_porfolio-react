import React, { Component, Fragment } from 'react'
import AllProjects from '../components/AllProjects/AllProjects'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'

export default class PortfolioPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title='Our Portfolio' />
                <PageTop pagetitle='Our Portfolio' />
                <AllProjects />
                <Footer />
            </Fragment>
        )
    }
}

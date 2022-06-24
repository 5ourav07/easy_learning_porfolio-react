import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import TermsDescription from '../components/TermsDescription/TermsDescription'

export default class TermsPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title='Terms & Conditions' />
                <PageTop pagetitle='Terms & Conditions' />
                <TermsDescription />
                <Footer />
            </Fragment>
        )
    }
}

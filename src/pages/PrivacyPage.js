import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PrivacyDescription from '../components/PrivacyDescription/PrivacyDescription'

export default class TermsPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title='Privacy & Policy' />
                <PageTop pagetitle='Privacy & Policy' />
                <PrivacyDescription />
                <Footer />
            </Fragment>
        )
    }
}

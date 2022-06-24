import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import RefundDescription from '../components/RefundDescription/RefundDescription'

export default class RefundPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title='Refund Policy' />
                <PageTop pagetitle='Refund Policy' />
                <RefundDescription />
                <Footer />
            </Fragment>
        )
    }
}

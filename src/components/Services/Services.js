import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import designIcon from '../../asset/image/design.png'
import ecommerceIcon from '../../asset/image/ecommerce.png'
import webIcon from '../../asset/image/web.png'

export default class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container className='text-center'>
                    <h1 className='serviceMainTitle'>MY SERVICES</h1>
                    <div className='bottom'></div>
                    
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className='serviceCard text-center'>
                                <img className='ecommerceIcon' src={ ecommerceIcon } />
                                <h2 className='serviceName'>E-commerce</h2>
                                <p className='serviceDescription'>I will design and develop E-commerce online store website</p>
                            </div>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <div className='serviceCard text-center'>
                                <img className='designIcon' src={ designIcon } />
                                <h2 className='serviceName'>Web Design</h2>
                                <p className='serviceDescription'>Qualified web design and and attractiveeffects which catches visitor's eye</p>
                            </div>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <div className='serviceCard text-center'>
                                <img className='webIcon' src={ webIcon } />
                                <h2 className='serviceName'>Web Development</h2>
                                <p className='serviceDescription'>Clean and fresh free code to make your website dynamically perfect</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className='footerSection'>
                    <Row>
                        <Col lg={3} md={6} sm={12} className='p-5 text-center'>
                            <h2 className='footerName text-center'>Follow Us</h2>
                            <div className='social-container'>
                                <a href='#' className='facebook social'>
                                    <FontAwesomeIcon icon={faFacebook} size='2x'></FontAwesomeIcon>
                                </a>

                                <a href='#' className='youtube social'>
                                    <FontAwesomeIcon icon={faYoutube} size='2x'></FontAwesomeIcon>
                                </a>

                                <a href='#' className='twitter social'>
                                    <FontAwesomeIcon icon={faTwitter} size='2x'></FontAwesomeIcon>
                                </a>
                            </div>
                        </Col>

                        <Col lg={3} md={6} sm={12} className='p-5 text-justify'>
                            <h2 className='footerName'>Address</h2>
                            <p className='footerDescription'>
                                6605 Baltimore National Pike CatonsVille, California, USA<br></br>
                                <FontAwesomeIcon icon={faEnvelope} /> Email: admin@gmail.com<br></br>
                                <FontAwesomeIcon icon={faPhone} /> Phone: 017822222222
                            </p>
                        </Col>

                        <Col lg={3} md={6} sm={12} className='p-5 text-justify'>
                            <h2 className='footerName'>Information</h2>
                            <Link className='footerLink' to='/about'>About Me</Link><br></br>
                            <Link className='footerLink' to='/about'>Company's Profile</Link><br></br>
                            <Link className='footerLink' to='/contact'>Contact Us</Link><br></br>
                        </Col>

                        <Col lg={3} md={6} sm={12} className='p-5 text-justify'>
                            <h2 className='footerName'>Policy</h2>
                            <Link className='footerLink' to='/refund'>Refund Policy</Link><br></br>
                            <Link className='footerLink' to='/terms'>Terms & Condition</Link><br></br>
                            <Link className='footerLink' to='/privacy'>Privacy & Policy</Link><br></br>
                        </Col>
                    </Row>
                </Container>

                <Container fluid={true} className='text-center copyrightSection'>
                    <a className='copyrightlink' href='#'>
                        © Easy Learning 2022
                    </a>
                </Container>
            </Fragment>
        )
    }
}

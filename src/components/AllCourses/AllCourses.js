import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class AllCourses extends Component {
    render() {
        return (
            <Fragment>
                <Container className='text-center'>
                    <h1 className="serviceMainTitle">My Courses</h1>
                    <div className="bottom"></div>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12} className='p-2'>
                                    <img className='courseImg' src='https://image.freepik.com/free-photo/learner-lesson_1098-14155.jpg'></img>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 style={{ textAlign: 'justify' }} className='serviceName'>Laravel 8</h5>
                                    <p style={{ textAlign: 'justify' }} className='serviceDescription'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link className=' courseViewMore float-left' to='/coursedetails'>View Details</Link>
                                </Col>

                                <Col lg={6} md={6} sm={12} className='p-2'>
                                    <img className='courseImg' src='https://image.freepik.com/free-photo/coach-by-whiteboard_1098-12970.jpg'></img>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 style={{ textAlign: 'justify' }} className='serviceName'>Laravel 8</h5>
                                    <p style={{ textAlign: 'justify' }} className='serviceDescription'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link className=' courseViewMore float-left' to='/coursedetails'>View Details</Link>
                                </Col>

                                <Col lg={6} md={6} sm={12} className='p-2'>
                                    <img className='courseImg' src='https://image.freepik.com/free-photo/coach-by-whiteboard_1098-12970.jpg'></img>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 style={{ textAlign: 'justify' }} className='serviceName'>Laravel 8</h5>
                                    <p style={{ textAlign: 'justify' }} className='serviceDescription'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link className=' courseViewMore float-left' to='/coursedetails'>View Details</Link>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12} className='p-2'>
                                    <img className='courseImg' src='https://img.freepik.com/free-photo/shocked-male-student-poses-desktop-home-office-uses-laptop-computer-searching-online-education-course-browses-distance-learning-website_273609-34548.jpg'></img>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 style={{ textAlign: 'justify' }} className='serviceName'>Laravel 8</h5>
                                    <p style={{ textAlign: 'justify' }} className='serviceDescription'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link className=' courseViewMore float-left' to='/coursedetails'>View Details</Link>
                                </Col>

                                <Col lg={6} md={6} sm={12} className='p-2'>
                                    <img className='courseImg' src='https://image.freepik.com/free-photo/training-managers_1098-16067.jpg'></img>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 style={{ textAlign: 'justify' }} className='serviceName'>Laravel 8</h5>
                                    <p style={{ textAlign: 'justify' }} className='serviceDescription'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link className=' courseViewMore float-left' to='/coursedetails'>View Details</Link>
                                </Col>

                                <Col lg={6} md={6} sm={12} className='p-2'>
                                    <img className='courseImg' src='https://image.freepik.com/free-photo/training-managers_1098-16067.jpg'></img>
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 style={{ textAlign: 'justify' }} className='serviceName'>Laravel 8</h5>
                                    <p style={{ textAlign: 'justify' }} className='serviceDescription'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link className=' courseViewMore float-left' to='/coursedetails'>View Details</Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

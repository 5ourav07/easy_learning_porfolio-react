import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

export default class Summary extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className='summaryBanner p-0'>
                    <div className='summaryBannerOverlay'>
                        <Container className="text-center">
                            <Row>
                                <Col lg={8} md={6} sm={12}>
                                    <Row className="countSection">
                                        <Col>
                                            <FontAwesomeIcon className='iconProject' icon={faGlobe} />
                                            <h1 className="countNumber">
                                                <CountUp start={0} end={35000}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className="countTitle">Student Worldwide</h4>
                                            <hr className="bg-white w-30" />
                                        </Col>

                                        <Col>
                                            <FontAwesomeIcon className='iconProject' icon={faLaptop} />
                                            <h1 className="countNumber">
                                                <CountUp start={0} end={22}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className="countTitle">Course Published</h4>
                                            <hr className="bg-white w-30" />
                                        </Col>

                                        <Col>
                                            <FontAwesomeIcon className='iconProject' icon={faStar} />
                                            <h1 className="countNumber">
                                                <CountUp start={0} end={3000}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className="countTitle">Student Reviews</h4>
                                            <hr className="bg-white w-30" />
                                        </Col>
                                    </Row>
                                </Col>

                                <Col lg={4} md={6} sm={12}>
                                    <Card className='workCard'>
                                        <Card.Body>
                                            <Card.Title className='cardTitle'>What I have Achieved</Card.Title>
                                            <Card.Text>
                                                <p style={{ textAlign: 'justify' }} className='cardSubTitle'>
                                                    <FontAwesomeIcon className='iconBullent' icon={faCheckSquare} /> 
                                                    Requirement Gathering
                                                </p>

                                                <p style={{ textAlign: 'justify' }} className='cardSubTitle'>
                                                    <FontAwesomeIcon className='iconBullent' icon={faCheckSquare} /> 
                                                    System Analysis
                                                </p>

                                                <p style={{ textAlign: 'justify' }} className='cardSubTitle'>
                                                    <FontAwesomeIcon className='iconBullent' icon={faCheckSquare} /> 
                                                    Coding Testing
                                                </p>
                                                
                                                <p style={{ textAlign: 'justify' }} className='cardSubTitle'>
                                                    <FontAwesomeIcon className='iconBullent' icon={faCheckSquare} /> 
                                                    Implementation
                                                </p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        )
    }
}

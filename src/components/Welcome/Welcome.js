import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import pageone from '../../asset/image/page1.png'
import pagetwo from '../../asset/image/page2.png'
import pagethree from '../../asset/image/page3.png'

import imgone from '../../asset/image/19.png'
import imgtwo from '../../asset/image/20.png'
import imgthree from '../../asset/image/21.png'

export default class Welcome extends Component {
  render() {
    return (
      <Fragment>
        <div className='intro-area--top'>
          <Container>
            <Row>
              <Col lg={12} md={12} sm={12}>
                <div className='section-title text-center'>
                  <div className='intro-area-inner'>
                    <h6 className='sub-title double-line'>WELCOME</h6>
                    <h2 className='maintitle'>
                      An exemplary<br></br>
                      learning community
                    </h2>

                    <Container className='text-center mt-5'>
                      <Row>
                        <Col lg={4} md={6} sm={12}>
                          <img src={pageone} />
                          <h1 className='serviceName'>Easy at it Gets</h1>
                          <p className='serviceDescription'>Smaple Text</p>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                          <img src={pagetwo} />
                          <h1 className='serviceName'>Teach the Way You Want</h1>
                          <p className='serviceDescription'>Smaple Text</p>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                          <img src={pagethree} />
                          <h1 className='serviceName'>The Small Matter</h1>
                          <p className='serviceDescription'>Smaple Text</p>
                        </Col>
                      </Row>

                      <Row className='intro-footer bg-base text-center mt-5'>
                        <Col lg={4} md={6} sm={12}>
                          <Row>
                            <Col lg={6} md={6} sm={12} className='p-2'>
                              <img className='sideImg' src={imgone}></img>
                            </Col>

                            <Col lg={6} md={6} sm={12} className='p-2'>
                              <h5 className='text-justify homeIntro'>Development</h5>
                              <p className='text-justify serviceDescription'>Demo Text</p>
                            </Col>
                          </Row>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                          <Row>
                            <Col lg={6} md={6} sm={12} className='p-2'>
                              <img className='sideImg' src={imgtwo}></img>
                            </Col>

                            <Col lg={6} md={6} sm={12} className='p-2'>
                              <h5 className='text-justify homeIntro'>Web Design</h5>
                              <p className='text-justify serviceDescription'>Demo Text</p>
                            </Col>
                          </Row>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                          <Row>
                            <Col lg={6} md={6} sm={12} className='p-2'>
                              <img className='sideImg' src={imgthree}></img>
                            </Col>

                            <Col lg={6} md={6} sm={12} className='p-2'>
                              <h5 className='text-justify homeIntro'>E-commerce</h5>
                              <p className='text-justify serviceDescription'>Demo Text</p>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    )
  }
}

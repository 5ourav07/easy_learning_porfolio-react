import React, { Component, Fragment } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import face from '../../asset/image/face.png'
import { init } from 'ityped'

export default class AboutMe extends Component {

    componentDidMount() {
        const myElement = document.querySelector('#myElement')
        init(myElement, { showCursor: false, strings: ['Web Developer!', 'Online Instructor!'] })
    }

    render() {
        return (
            <Fragment>
                <Container className='text-center'>
                    <h1 className='serviceMainTitle'>ABOUT ME</h1>
                    <div className='bottom'></div>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <div className='aboutMeImage'>
                                <img className='aboutImg' src={face}></img>
                            </div>
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <div className='aboutMeBody'>
                                <h2 className='aboutMeDetails'>HI THERE! I'm</h2>
                                <h2 className='aboutMeTitle'>KAZI ARIYAN</h2>
                                <h3 className='aboutMeDetails'>Work as <span id="myElement"></span></h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

import React, { Component, Fragment } from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

export default class ContactSec extends Component {
    render() {
        return (
            <Fragment>
                <Container className='mt-5'>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className='serviceName'>Quick Connect</h1> 
                            <Form>
                                <Form.Group>
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Name" />
                                </Form.Group>
                                <br></br>
                                <Form.Group>
                                    <Form.Label>Your Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Your Email" />
                                </Form.Group>
                                <br></br>
                                <Form.Group>
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as='textarea' rows={3} />
                                </Form.Group>
                                <br></br>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <h1 className='serviceName'>Discuss Now</h1>
                            <p className='serviceDescription'>
                                6605 Baltimore National Pike CatonsVille, California, USA<br></br>
                                <FontAwesomeIcon icon={faEnvelope} /> Email: admin@gmail.com<br></br>
                                <FontAwesomeIcon icon={faPhone} /> Phone: 017822222222
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

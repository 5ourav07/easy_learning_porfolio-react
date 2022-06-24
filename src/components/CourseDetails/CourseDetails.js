import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default class CourseDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={8} md={6} sm={12}>
                            <h1>Course Details</h1>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <h1>Course Details</h1>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

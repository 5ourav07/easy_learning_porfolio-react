import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'

export default class Analysis extends Component {
    
    constructor() {
        super();
        this.state = {
            data: [
                { Technology: 'PHP', Projects: 100 },
                { Technology: 'MySqli', Projects: 96 },
                { Technology: 'Laravel', Projects: 90 },
                { Technology: 'React', Projects: 80 },
                { Technology: 'Javascript', Projects: 60 },
                { Technology: 'Laravel', Projects: 90 },
                { Technology: 'React', Projects: 80 },
                { Technology: 'Javascript', Projects: 60 }
            ]
        }
    }


    render() {
        var blue = "#051b35"
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">TECHNOLOGY USED</h1>
                    <div className="bottom"></div>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <ResponsiveContainer>
                                <BarChart width={100} height={300} data={this.state.data}>
                                    <XAxis dataKey="Technology" /> 
                                    <Tooltip />
                                    <Bar dataKey="Projects" fill={blue}></Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </Col>

                        <Col lg={6} md={12} sm={12}>
                            <p style={{ textAlign: 'justify' }} className="serviceDescription">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.
                                <br></br><br></br>
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
                                versions of Lorem Ipsum.
                                <br></br><br></br>
                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
                                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original
                                form, accompanied by English versions from the 1914 translation by H. Rackham.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

export default class ClientReview extends Component {
    render() {
        var settings = {
            autoPlaySpeed: 3000,
            autoPlay: true,
            dots: true,
            infinite: true,
            speed: 3000,
            arrows: false,
            vertical: true,
            verticalSwiping: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Fragment>
                <Container fluid={true} className='siderBack text-center'>
                    <h1 className='reviewMainTitle p-3'>TESTIMONIAL</h1>
                    <div className='reviewbottom'></div>
                    <Slider {...settings}>
                        <div>
                            <Row className='text-center justify-content-center'>
                                <Col lg={6} md={6} sm={12}>
                                    <img className='circleImg' src='https://img.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19637.jpg'></img>
                                    <h2 className='reviewName'>Rahim</h2>
                                    <p className='reviewDescription'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                        make a type specimen book.
                                    </p>
                                </Col>
                            </Row>
                        </div>

                        <div>
                            <Row className='text-center justify-content-center'>
                                <Col lg={6} md={6} sm={12}>
                                    <img className='circleImg' src='https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg'></img>
                                    <h2 className='reviewName'>Karim</h2>
                                    <p className='reviewDescription'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                        make a type specimen book.
                                    </p>
                                </Col>
                            </Row>
                        </div>

                        <div>
                            <Row className='text-center justify-content-center'>
                                <Col lg={6} md={6} sm={12}>
                                    <img className='circleImg' src='https://img.freepik.com/free-photo/red-haired-serious-young-man-blogger-looks-confidently_273609-16730.jpg'></img>
                                    <h2 className='reviewName'>David</h2>
                                    <p className='reviewDescription'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                        make a type specimen book.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </Slider>
                </Container>
            </Fragment>
        )
    }
}

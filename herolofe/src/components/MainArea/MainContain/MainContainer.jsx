import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './MainContainer.css'

class MainConTain extends React.Component {
    render() {
        return (
            <Container>
                <div className="MainContainer">

                    <Col xs={12}>
                        <Row>
                            <Col xs="2">
                                <div className="WeatherPic"></div>
                            </Col>
                            <Col >israel TLV</Col>
                            <Col className="BtnContain" xs={{ size: '4', offset: 1 }}>
                                <button className="FavBtn">add to Favorites</button>
                            </Col>
                        </Row>
                        <div className="spacer">weather is fine</div>

                        <div className="dayCardContainer">

                            <Row>

                                <Col md={4} xs={12} lg={2}><div className="dayCard">Sunday</div></Col>
                                <Col md={4} xs={12} lg={2}><div className="dayCard">Monday</div></Col>
                                <Col md={4} xs={12} lg={2}><div className="dayCard">Tuesday</div></Col>

                                <Col md={4} xs={12} lg={2}><div className="dayCard">Wednesday </div></Col>
                                <Col md={4} xs={12} lg={2}><div className="dayCard">Thursday </div></Col>



                            </Row>
                        </div>
                    </Col>

                </div>
            </Container>
        );
    }
}

export default MainConTain;
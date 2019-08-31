import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './MainContainer.css'

class MainConTain extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <Container>
                <div className="MainContainer">

                    <Col xs={12}>
                        <Row className="maincontain">

                            <Col xs="8">
                                <div className="WeatherPic"></div>
                                <Col xs="4" className="locationName" >{this.props.locationName}</Col>
                            </Col>

                            <Col className="BtnContain" xs={{ size: '4', offset: 1 }}>
                                <button className="FavBtn">add to Favorites</button>
                            </Col>
                        </Row>
                        <div className="spacer">{this.props.condition} </div>

                        <div className="dayCardContainer">

                            <Row>

                                <Col md={4} xs={12} lg={2}><div className="dayCard"><div>Sunday</div>{this.props.weekWeather && <div>{this.props.weekWeather[0]["Temperature"]["Minimum"]["Value"]} °F</div>}{this.props.weekWeather && <div>{this.props.weekWeather[0]["Day"]["IconPhrase"]}</div>}  </div></Col>
                                <Col md={4} xs={12} lg={2}><div className="dayCard"><div>Monday</div>{this.props.weekWeather && <div>{this.props.weekWeather[1]["Temperature"]["Minimum"]["Value"]} °F</div>}{this.props.weekWeather && <div>{this.props.weekWeather[1]["Day"]["IconPhrase"]}</div>} </div></Col>
                                <Col md={4} xs={12} lg={2}><div className="dayCard"><div>Tuesday</div>{this.props.weekWeather && <div>{this.props.weekWeather[2]["Temperature"]["Minimum"]["Value"]} °F</div>}{this.props.weekWeather && <div>{this.props.weekWeather[2]["Day"]["IconPhrase"]}</div>} </div></Col>

                                <Col md={4} xs={12} lg={2}><div className="dayCard"><div>Wednesday</div>{this.props.weekWeather && <div>{this.props.weekWeather[3]["Temperature"]["Minimum"]["Value"]} °F</div>}{this.props.weekWeather && <div>{this.props.weekWeather[3]["Day"]["IconPhrase"]}</div>}  </div></Col>
                                <Col md={4} xs={12} lg={2}><div className="dayCard"><div>Thursday</div>{this.props.weekWeather && <div>{this.props.weekWeather[4]["Temperature"]["Minimum"]["Value"]} °F</div>}{this.props.weekWeather && <div>{this.props.weekWeather[4]["Day"]["IconPhrase"]}</div>}  </div></Col>



                            </Row>
                        </div>
                    </Col>

                </div>
            </Container>
        );
    }
}

export default MainConTain;
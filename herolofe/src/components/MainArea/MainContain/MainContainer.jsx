import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './MainContainer.css'

class MainConTain extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            errorMsg: undefined
        }
        this.addToFav = this.addToFav.bind(this);
    }
    addToFav() {
        if (this.props.weekWeather !== undefined) {
            let datedStorage = JSON.parse(localStorage.getItem('favorites'));
            if (datedStorage === null) { datedStorage = [{ "name": "Israel", "Temperature": "47" }] }
            localStorage.setItem('favorites', JSON.stringify([...datedStorage, { "name": this.props.locationName, "Temperature": this.props.weekWeather[0]["Temperature"]["Minimum"]["Value"] }]))
            let localData = JSON.parse(localStorage.getItem('favorites'))
        }
        else {
            this.setState({
                errorMsg: "no location was choosed"
            })
            setTimeout(
                function () {
                    this.setState({ errorMsg: undefined });
                }
                    .bind(this),
                3000
            );
        }

    }

    render() {
        return (
            <Container className="favContianer">


                <Col xs={12}>
                    <Row className="maincontain">

                        <Col xs="8">
                            <div className="WeatherPic"></div>
                            <Col xs="4" className="locationName" >{this.props.locationName}</Col>
                        </Col>

                        <Col className="BtnContain" xs={{ size: '4', offset: 1 }}>
                            <button onClick={this.addToFav} className="FavBtn">add to Favorites</button>
                        </Col>
                    </Row>

                    <Col>
                        <div className="spacer">{this.props.condition}{this.state.errorMsg && this.state.errorMsg} </div>
                    </Col >
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

            </Container >
        );
    }
}

export default MainConTain;
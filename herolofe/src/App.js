import React from 'react';
import './app.css'
import { Container, Row, Col } from 'reactstrap';
import HeaderLogo from "./components/Header/HeaderLogo/Header";
import HeaderNav from "./components/Header/HeaderNav/HeaderNav"
import SearchBar from "./components/SearchBar/SearchBar"
import MainContainer from "./components/MainArea/MainContain/MainContainer"

const apiKey = "xMeBnng5uZh5l1Jl9DlAL2kJi6EUdwT7";

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      locationName: undefined,
      searchInput: "",
      currentCityKey: "215854",
      weekWeather: [],
      conditions: undefined,
      sundayW: undefined,
      // sundayW: this.state.weekWeather[0]["Temperature"]["Minimum"]["Value"]
    }
    this.getKey = this.getKey.bind(this);
    this.getWeather = this.getWeather.bind(this);
  }



  getKey(searchWord) {
    this.setState({
      searchInput: searchWord
    })
    const url =
      "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=" + apiKey + "&q=" + searchWord;

    fetch(url).then(Response => Response.json())
      .then((data) => {
        if (data[0] !== undefined) {
          this.setState({ currentCityKey: data[0].Key, locationName: data[0].EnglishName + ", " + data[0].Country.ID })
          console.log(data[0].EnglishName + ", " + data[0].Country.ID)
          this.getWeather();
        }
        else {
          this.setState({ currentCityKey: "" })
        }
      }).catch()
  }

  getWeather() {
    const url =
      "http://dataservice.accuweather.com/forecasts/v1/daily/5day/" + this.state.currentCityKey + "?apikey=" + apiKey;
    fetch(url).then(Response => Response.json())
      .then((data) => {
        console.log(data)
        this.setState({
          sundayW: data["DailyForecasts"],
          conditions: data.Headline.Text,
        })
        console.log(this.state.sundayW)
        console.log(this.state.conditions)

      }).catch()

  }




  render() {
    return (
      <Container fluid >
        <Row className="headerRow">
          <HeaderLogo /><HeaderNav />
        </Row>
        <Row className="searchBarCol">
          <Col xs={{ size: '9', offset: 3 }}>
            <SearchBar getLocation={this.getKey} />
          </Col>
        </Row>
        <Row>
          <Col xs={{ size: '12' }}>
            <MainContainer locationName={this.state.locationName} condition={this.state.conditions} weekWeather={this.state.sundayW} />


          </Col>
        </Row>

      </Container>
    );
  }
}


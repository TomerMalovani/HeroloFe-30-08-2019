import React from 'react';
import './app.css'
import { Container, Row, Col } from 'reactstrap';
import HeaderLogo from "./components/Header/HeaderLogo/Header";
import HeaderNav from "./components/Header/HeaderNav/HeaderNav"
import SearchBar from "./components/SearchBar/SearchBar"
import MainContainer from "./components/MainArea/MainContain/MainContainer"
import Favorites from "./components/favorites/favorites"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const apiKey = "xMeBnng5uZh5l1Jl9DlAL2kJi6EUdwT7";

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      locationName: "Tel Aviv, IL",
      searchInput: "",
      currentCityKey: "215854",
      weekWeather: [],
      conditions: undefined,
      dailyForecast: undefined,
    }
    this.getKey = this.getKey.bind(this);
    this.getWeather = this.getWeather.bind(this);
  }


  componentDidMount() {
    this.getWeather();
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
          this.setState({
            currentCityKey:
              data[0].Key, locationName: data[0].EnglishName + ", " + data[0].Country.ID
          })
        }
        this.getWeather();

      }).catch()
  }

  getWeather() {
    console.log(this.state.currentCityKey)
    const url =
      "http://dataservice.accuweather.com/forecasts/v1/daily/5day/" + this.state.currentCityKey + "?apikey=" + apiKey;
    fetch(url).then(Response => Response.json())
      .then((data) => {
        this.setState({
          dailyForecast: data["DailyForecasts"],
          conditions: data.Headline.Text,
        })


      }).catch()

  }




  render() {
    return (
      <Container fluid >
        <Router>
          <Row className="headerRow">
            <HeaderLogo /><HeaderNav />
          </Row>


          <Row className="searchBarCol">
            <Route path="/favorites" component={() => { return <span className="favoritesHeader">Favorites</span> }} />

            <Col xs={{ size: '9', offset: 3 }}>


              <Route path="/" exact component={() => <SearchBar getLocation={this.getKey} />} />
            </Col>
          </Row>
          <Row>
            <Col xs={{ size: '12' }}>
              <Switch>

                <Route path="/" exact component={() => <MainContainer sendToFAV={this.sendToFAV} locationName={this.state.locationName} condition={this.state.conditions} weekWeather={this.state.dailyForecast} />} />
                <Route excat path="/favorites" component={() => <Favorites favorites={this.state.favorites} />} />

              </Switch>

            </Col>
          </Row>
        </Router>

      </Container>
    );
  }
}


import React from 'react';
import './app.css'
import { Container, Row, Col } from 'reactstrap';
import HeaderLogo from "./components/Header/HeaderLogo/Header";
import HeaderNav from "./components/Header/HeaderNav/HeaderNav"
import SearchBar from "./components/SearchBar/SearchBar"
import MainContainer from "./components/MainArea/MainContain/MainContainer"



export default class App extends React.Component {
  render() {
    return (
      <Container fluid >
        <Row className="headerRow">
          <Col xs="6"><HeaderLogo /></Col><Col xs="6"><HeaderNav /></Col>
        </Row>
        <Row>
          <Col xs={{ size: '9', offset: 3 }}>
            <SearchBar />
          </Col>
        </Row>
        <Row>
          <Col xs={{ size: '12' }}>
            <MainContainer>

            </MainContainer>
          </Col>
        </Row>

      </Container>
    );
  }
}


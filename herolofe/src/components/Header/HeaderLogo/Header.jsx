import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Header.css'

class HeaderLogo extends React.Component {
    render() {
        return (
            <Col className="HeroloLogo">Herolo Weather</Col>
        );
    }
}

export default HeaderLogo;
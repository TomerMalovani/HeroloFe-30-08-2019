import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Header.css'

class HeaderLogo extends React.Component {
    render() {
        return (
            <Col><h2 className="HeroloLogo">Herolo Weather</h2></Col>
        );
    }
}

export default HeaderLogo;
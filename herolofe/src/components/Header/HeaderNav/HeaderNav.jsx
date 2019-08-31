import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './HeaderNav.css'

class HeaderNav extends React.Component {
    render() {
        return (
            <Col className="menuContainer">

                <li className="MenuItem">
                    <button className="menuBtn">Home</button>
                </li>
                <li className="MenuItem">
                    <button className="menuBtn">Favorites</button>
                </li>

            </Col>
        );
    }
}

export default HeaderNav;
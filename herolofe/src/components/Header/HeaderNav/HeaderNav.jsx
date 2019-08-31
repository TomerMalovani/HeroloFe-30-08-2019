import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './HeaderNav.css'
import { Link } from 'react-router-dom'
class HeaderNav extends React.Component {
    render() {
        return (

            <Col className="menuContainer">

                <Link to="/">
                    <li className="MenuItem">
                        <button className="menuBtn">Home</button>
                    </li>
                </Link>
                <Link to="/favorites">
                    <li className="MenuItem">
                        <button className="menuBtn">Favorites</button>
                    </li>
                </Link>

            </Col>

        );
    }
}

export default HeaderNav;
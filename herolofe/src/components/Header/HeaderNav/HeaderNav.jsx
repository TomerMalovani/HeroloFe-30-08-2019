import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './HeaderNav.css'

class HeaderNav extends React.Component {
    render() {
        return (
            <div className="menuContainer">

                <li className="MenuItem">
                    <button className="menuBtn">Home</button>
                </li>
                <li className="MenuItem">
                    <button className="menuBtn">Favorites</button>
                </li>

            </div>
        );
    }
}

export default HeaderNav;
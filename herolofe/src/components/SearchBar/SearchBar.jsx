import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './SearchBar.css'

class SearchBar extends React.Component {
    render() {
        return (
            <div>
                <form className="searchForm">
                    <input className="searchBar" type="text" />
                    <button type="submit">search</button>
                </form>
            </div>
        );
    }
}

export default SearchBar;
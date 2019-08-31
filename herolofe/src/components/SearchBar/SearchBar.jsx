import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './SearchBar.css'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchBarInput: ""
        }
        this.getLocationProp = this.getLocationProp.bind(this);
        this.changeInput = this.changeInput.bind(this);
    }

    changeInput(e) {
        this.setState({
            searchBarInput: e.target.value
        })
    }

    getLocationProp(e) {
        this.props.getLocation(this.state.searchBarInput);
        e.preventDefault();

    }

    render() {
        return (
            <div>
                <input value={this.state.searchBarInput} onChange={this.changeInput} className="searchBar" type="text" name="searchcity" />
                <button type="submit" onClick={this.getLocationProp} >search</button>
            </div>
        );
    }
}

export default SearchBar;
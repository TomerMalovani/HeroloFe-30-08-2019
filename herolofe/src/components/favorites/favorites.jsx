import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './favorites.css'

class Favorites extends React.Component {
    constructor(props) {
        super(props)

        this.removeFav = this.removeFav.bind(this);
    }
    removeFav(e) {
        console.log(e.target.value)
    }
    render() {
        return (
            <Container className="favContianer">
                <Row>
                    <div className="favContianer">
                        {JSON.parse(localStorage.getItem('favorites')).map((item, index) => (
                            <Col xs={12} md={4} lg={2} className="favCard" key={index}>
                                <p><Row>{item.name}</Row> {item.Temperature}°F</p></Col>))}

                    </div>
                </Row>
            </Container>

        );
    }
}

export default Favorites;
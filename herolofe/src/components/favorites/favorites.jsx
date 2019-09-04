import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './favorites.css'

class Favorites extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <Container className="favContianer">
                <Row>
                    <div className="favContianer">
                        {localStorage.getItem('favorites') == null &&
                            <p className="">no favorites</p>
                        }
                        {localStorage.getItem('favorites') &&
                            JSON.parse(localStorage.getItem('favorites')).map((item, index) => (
                                <Col xs={12} md={4} lg={2} className="favCard" key={index}>
                                    <p><Row>{item.name}</Row> {item.Temperature}°F</p></Col>))
                        }


                    </div>
                </Row>
            </Container>

        );
    }
}

export default Favorites;
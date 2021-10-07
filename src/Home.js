import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Hero: [
                ['Layla', 'Armor', 'ini isi text'],
                ['Gatotkaca', 'Armor', 'ini isi text'],
                ['Aldous', 'Weapon', 'ini isi text'],
                ['Eudora', 'Armor', 'ini isi text'],
                ['Ling', 'Weapon', 'ini isi text'],
                ['Johnson', 'Armor', 'ini isi text'],
                ['Badang', 'Weapon', 'ini isi text'],
                ['Chou', 'Armor', 'ini isi text']
            ],

        }
    }
    render() {

        const {
            Hero,
        } = this.state
        return (
            <>
                <h1>List Merchandise</h1>
                <Row xs={1} md={4} className="g-4">
                    {Hero.map(item => (
                        <Col>
                            <Card border="dark">
                                <Card.Header>{item[0]}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{item[1]}</Card.Title>
                                    <Card.Text>
                                        {item[2]}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </>
        )
    }
}
export default Home;
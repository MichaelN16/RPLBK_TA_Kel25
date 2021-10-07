import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Fade from 'react-bootstrap/Fade'

class Aboutus extends React.Component {
    render() {
        return (
            <>
                <h1>About Us</h1>
                <Fade in={true}>
                    <Row>
                        <Col>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Tentang Kami</Accordion.Header>
                                    <Accordion.Body>
                                        Kami menjual Merchandise Mobile Legend yang dimana Merchandise ini dijual dengan harga yang terjangkau.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Informasi Mahasiswa</Accordion.Header>
                                    <Accordion.Body>
                                        <b>
                                            Pembuat
                                        </b>
                                        <p>
                                            Serafino
                                        </p>
                                        <p>
                                            Michael Nathan
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Row>
                </Fade>
            </>
        )
    }
}
export default Aboutus;
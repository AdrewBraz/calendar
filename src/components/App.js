import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import Modal from './Modal'
import ModalButton from './ModalButton'
const App = () => {
    const modal = useSelector((state) => state.modal);

    return (
        <Container>
            <Row>
                <Col>
                  <ModalButton />
                </Col>
                <Modal modal={modal !== 'hide'}/>
            </Row>
        </Container>
    )
}

export default App;
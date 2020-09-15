//@ts-check
import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import Modal from './Modal';
import ModalButton from './ModalButton';
import TodoList from './TodoList';
import Calendar from './Calendar/Calendar';


const App = () => {
  const modal = useSelector((state) => state.modal);
  const todos = useSelector((state) => state.todos);

  return (
    <Container>
      <Row>
        <Col>
          <ModalButton />
        </Col>
      </Row>
      <Row>
      <Col>
        <TodoList todos={todos} />
      </Col>
      </Row>
      <Row>
      <Col>
        <Calendar />
      </Col>
      </Row>
      <Modal modal={modal !== 'hide'} />
    </Container>
  );
};

export default App;

import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import Modal from './Modal';
import ModalButton from './ModalButton';
import TodoList from './TodoList';

const App = () => {
  const modal = useSelector((state) => state.modal);
  const todos = useSelector((state) => state.todos);

  return (
    <Container>
      <Row>
        <Col>
          <ModalButton />
        </Col>
        <Col>
          <TodoList todos={todos} />
        </Col>
        <Modal modal={modal !== 'hide'} />
      </Row>
    </Container>
  );
};

export default App;

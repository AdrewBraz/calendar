import React from 'react';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faCheck } from '@fortawesome/free-solid-svg-icons';
import actions from '../actions';

const Todo = (props) => {
  const { text, status, id } = props;
  const dispatch = useDispatch();

  const handleChangeStatus = (id) => {
    dispatch(actions.changeTodoStatus(id));
  };

  const renderText = (status) => {
    if (status === 'important') {
      return (
        <Col>
          <FontAwesomeIcon icon={faFire} />
          {text}
        </Col>
      );
    }
    if (status === 'completed') {
      return (
        <Col>
          <s>{text}</s>
        </Col>
      );
    }
    return (
      <Col>
        {text}
      </Col>
    );
  };

  return (
    <Container>
      <Row>
        {renderText(status)}
        <Col md={3}>
          <Button size="sm" variant="success" onClick={() => { handleChangeStatus(id); }}>
            <FontAwesomeIcon icon={faCheck} />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Todo;

//@ts-check
import React from 'react';
import {
  ListGroup, Container, Row, Col, Button,
} from 'react-bootstrap';

import Todo from './Todo';

const TodoList = (props) => {
  const { todos } = props;

  const renderList = (todos) => todos.map((item) => {
    const { text, id, status } = item;
    const li = (
      <ListGroup.Item key={text + id} id={id}>
        <Todo status={status} text={text} id={id} />
      </ListGroup.Item>
    );

    return li;
  });
  return todos.length === 0 ? null : <><ListGroup>{renderList(todos)}</ListGroup></>;
};

export default TodoList;

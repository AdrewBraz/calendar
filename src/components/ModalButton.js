//@ts-check
import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import actions from '../actions';

const ModalButton = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(actions.modalShow());
  };

  return (
    <Button variant="primary" onClick={handleClick}>Add ToDo</Button>
  );
};

export default ModalButton;

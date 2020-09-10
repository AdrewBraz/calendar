// @ts-check

import { modalHide, modalShow } from '../reducers/modalSlice';
import { addTodo, changeTodoStatus } from '../reducers/todoSlice';

const actions = {
  modalHide,
  modalShow,
  addTodo,
  changeTodoStatus,
};

export default actions;

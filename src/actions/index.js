// @ts-check

import { modalHide, modalShow } from '../reducers/modalSlice';
import { addTodo, changeTodoStatus, deleteTodo } from '../reducers/todoSlice';

const actions = {
  modalHide,
  modalShow,
  addTodo,
  changeTodoStatus,
  deleteTodo
};

export default actions;

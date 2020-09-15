// @ts-check

import { modalHide, modalShow } from '../reducers/modalSlice';
import { addTodo, changeTodoStatus, deleteTodo } from '../reducers/todoSlice';
import { selectDate } from '../reducers/dateSlice';

const actions = {
  modalHide,
  modalShow,
  addTodo,
  changeTodoStatus,
  deleteTodo,
  selectDate
};

export default actions;

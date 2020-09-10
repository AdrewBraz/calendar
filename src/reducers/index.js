// @ts-check
import { combineReducers } from '@reduxjs/toolkit';
import todos from './todoSlice';
import modal from './modalSlice';

export default combineReducers({
  todos,
  modal,
});

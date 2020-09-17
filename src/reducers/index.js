// @ts-check
import { combineReducers } from '@reduxjs/toolkit';
import todos from './todoSlice';
import modal from './modalSlice';
import date from './dateSlice';

export default combineReducers({
  todos,
  modal,
  date,
});

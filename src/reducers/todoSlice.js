// @ts-check
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo(state, { payload }) {
      state.push(payload);
      return state;
    },
    changeTodoStatus(state, { payload }) {
      const id = payload;
      const index = state.findIndex((item) => id === item.id);
      state[index].status = 'completed';
    },
    deleteTodo(state, { payload }){
      const id = payload;
      return state.filter(item => item.id !== id)
    }
  },
});

export const { addTodo, changeTodoStatus, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;

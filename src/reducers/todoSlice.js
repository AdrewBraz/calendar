//@ts-check
import { createSlice } from '@reduxjs/toolkit';


const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo(state, { payload: { todo } }) {
       state.push(todo)
       return state;
    }
  }
})

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
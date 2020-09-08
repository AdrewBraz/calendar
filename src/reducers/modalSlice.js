//@ts-check
import { createSlice } from '@reduxjs/toolkit';


const modalSlice = createSlice({
  name: 'modal',
  initialState: 'hide',
  reducers: {
    modalShow(state) {
       state = 'show';
       return state;
    },
    modalHide(state) {
        state = 'hide';
        return state;
     }
  }
})

export const { modalShow, modalHide } = modalSlice.actions;

export default modalSlice.reducer;
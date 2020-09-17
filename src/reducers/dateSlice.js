// @ts-check
import { createSlice } from '@reduxjs/toolkit';

const dateSlice = createSlice({
  name: 'date',
  initialState: {
    currentDate: new Date(),
    selectedDate: new Date(),
  },
  reducers: {
    selectDate(state, { payload }) {
      state.selectedDate = payload;
    },
  },
});

export const { selectDate } = dateSlice.actions;

export default dateSlice.reducer;

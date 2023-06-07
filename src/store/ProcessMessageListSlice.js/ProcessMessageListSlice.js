// messageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const ProcessmessageListSlice = createSlice({
  name: 'messages',
  initialState: [],
  reducers: {
    addMessage: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addMessage } = ProcessmessageListSlice.actions;
export default ProcessmessageListSlice.reducer;

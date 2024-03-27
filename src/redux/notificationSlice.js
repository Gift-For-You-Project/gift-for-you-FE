import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listening: false,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setListening: (state, action) => {
      state.listening = action.payload;
    },
  },
});

export const { setListening } = notificationSlice.actions;
export default notificationSlice.reducer;
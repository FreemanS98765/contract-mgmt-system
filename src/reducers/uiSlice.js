import { createSlice } from "@reduxjs/toolkit";

const uiReducer = createSlice({
  name: "ui",
  initialState: { modalIsVisible: false, notification: null },
  reducers: {
    toggleNewItem(state) {
      state.modalIsVisible = !state.modalIsVisible;
    },
  },
});

export const uiActions = uiReducer.actions;

export default uiReducer.reducer;

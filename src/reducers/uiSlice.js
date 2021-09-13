import { createSlice } from "@reduxjs/toolkit";

const uiReducer = createSlice({
  name: "ui",
  initialState: { contractModalIsVisible: false },
  reducers: {
    toggleNewContract(state) {
      state.contractModalIsVisible = !state.contractModalIsVisible;
    },
  },
});

export const uiActions = uiReducer.actions;

export default uiReducer.reducer;

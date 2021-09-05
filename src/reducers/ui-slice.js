import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { contractModalIsVisible: false },
  reducers: {
    toggleNewContract(state) {
      state.contractModalIsVisible = !state.contractModalIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;

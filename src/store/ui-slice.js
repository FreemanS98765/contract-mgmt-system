import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { filtersAreVisible: false },
  reducers: {
    toggleFilters(state) {
      state.filtersAreVisible = !state.filtersAreVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;

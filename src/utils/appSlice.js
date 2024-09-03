import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    preferredLanguage: "en",
  },
  reducers: {
    updatePreferredLanguage: (state, action) => {
      state.preferredLanguage = action.payload;
    },
  },
});

export const { updatePreferredLanguage } = appSlice.actions;

export default appSlice.reducer;

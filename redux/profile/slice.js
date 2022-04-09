import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "", email: "" };

const slice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    fetchProfile: (state, action) => {},
    fetchProfileSuccess: (state, action) => {
      const { name, email } = action.payload;
      state.name = name || "";
      state.email = email || "";
    },
    fetchProfileRejected: (state, action) => {
      return state;
    },
    fetchProfileCancelled: () => initialState,
  },
});

export const {
  fetchProfile,
  fetchProfileSuccess,
  fetchProfileRejected,
  fetchProfileCancelled,
} = slice.actions;

export default slice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export interface utilsState {
  form_hidden: boolean;
}

const initialState: utilsState = {
  form_hidden: true,
};

export const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    set_form_hidden: (state) => {
      state.form_hidden = !state.form_hidden;
    },
  },
});

export const { set_form_hidden } = utilsSlice.actions;

export default utilsSlice.reducer;

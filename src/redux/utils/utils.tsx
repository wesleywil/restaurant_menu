import { createSlice } from "@reduxjs/toolkit";

export interface utilsState {
  form_hidden: boolean;
  delete_hidden: boolean;
}

const initialState: utilsState = {
  form_hidden: true,
  delete_hidden: true,
};

export const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    set_form_hidden: (state) => {
      state.form_hidden = !state.form_hidden;
    },
    set_delete_hidden: (state) => {
      state.delete_hidden = !state.delete_hidden;
    },
  },
});

export const { set_form_hidden, set_delete_hidden } = utilsSlice.actions;

export default utilsSlice.reducer;

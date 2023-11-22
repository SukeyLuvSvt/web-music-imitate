import { createAction, createSlice } from "@reduxjs/toolkit";

const singerReducer = createSlice({
  name: "singer",
  initialState: {
    settledSingers: [],
  },
  reducers: {
    setSettledSingers: (state, action) => {
      state.settledSingers = action.payload;
    },
  },
});

export default singerReducer.reducer;

export const { setSettledSingers } = singerReducer.actions;

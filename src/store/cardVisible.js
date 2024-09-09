import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const visibleSlice = createSlice({
  name: "visible",
  initialState,
  reducers: {
    setVisible(state, action) {
      return action.payload;
    },
    removeVisible(state,action){
      return false;

    }
  }
});

export const { setVisible,removeVisible } = visibleSlice.actions;
export default visibleSlice.reducer;

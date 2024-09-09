import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  reviews: []
};

const reviewSlice = createSlice({
  name: "review",
  initialState, 
  reducers: {
    addReviews(state, action) {
      state.reviews.push(action.payload);
    }
  }
});


export const { addReviews } = reviewSlice.actions;
export const reviews =reviewSlice.reducer

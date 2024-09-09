import { configureStore } from "@reduxjs/toolkit";
cardReducer
import cardVisible from "./cardVisible";
import { cardReducer } from "./CardSlice";
import { reviews } from "./reviewsSlice";
const store=configureStore({
  reducer:{
    card:cardReducer,
    visible:cardVisible,
    reviewData:reviews
  }
})
export default store
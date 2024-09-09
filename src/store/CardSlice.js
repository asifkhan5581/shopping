import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  product: [],
};

const CardSlice = createSlice({
  name: "card",
  initialState: initialState,
  reducers: {
    addProduct(state, action) {

      const existingItem = state.product.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.product.push(action.payload);
      }
    },
    removeProduct(state,action){
      const remove=state.product.filter((item)=>item.id!==action.payload)
      state.product=remove

    },
    incrementQuantity(state,action){

      const product=state.product.find((item)=>item.id===action.payload)
      if(product){
        product.quantity+=1
      }
    },
    decrementQuantity(state,action){
      const product=state.product.find((item)=>item.id===action.payload)
      if(product && product.quantity>1){
        product.quantity-=1
      }

    }
    
  },
  
});

// Export actions and reducer
export const { addProduct,decrementQuantity,incrementQuantity,removeProduct } = CardSlice.actions;
export const cardReducer = CardSlice.reducer;

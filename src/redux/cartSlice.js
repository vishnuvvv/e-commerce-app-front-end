import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
    userId: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    addProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },

    addProductSuccess: (state, action) => {
      state.quantity = state.quantity + 1;
      state.products.push(...action.payload.productData);
      state.total += action.payload.productData.price * action.payload.quantity;
      state.isFetching = false;
      state.error = false;
    },

    addProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    clearCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
      state.isFetching = false;
      state.error = false;
    },

    fetchCartStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },

    fetchCartSuccess: (state, action) => {
      state.error = false;
      state.products = action.payload.products; // Replace the existing products with the fetched products
      state.userId = action.payload.userId;
      state.isFetching = false;
    },

    fetchCartfailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    //delete cart
    //getcart
  },
});

export const {
  addProductStart,
  addProductSuccess,
  addProductFailure,
  clearCart,
  fetchCartStart,
  fetchCartSuccess,
  fetchCartfailure,
} = cartSlice.actions;
export default cartSlice.reducer;

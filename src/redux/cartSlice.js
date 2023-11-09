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
      state.quantity += 1;
      state.products.push(...action.payload.productData);
      state.isFetching = false;
      state.error = false;
    },

    addProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    fetchCartStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },

    //getcart
    fetchCartSuccess: (state, action) => {
      state.error = false;
      state.products = action.payload.products; // Replace the existing products with the fetched products
      state.total = state.products.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0);
      state.userId = action.payload.userId;
      state.isFetching = false;
    },

    fetchCartfailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    //delete cart
    deleteCartStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },

    deleteCartSuccess: (state, action) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
      state.isFetching = false;
      state.error = false;
    },

    deleteCartfailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    //delete Single Cart Item

    deleteCartItemStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },

    deleteCartItemSuccess: (state, action) => {
      const itemIdToRemove = action.payload.itemId; // Correctly extract itemId from payload
      const indexToRemove = state.products.findIndex(
        (item) => item._id === itemIdToRemove
      );
      if (indexToRemove !== -1) {
        state.products.splice(indexToRemove, 1);
      }
      state.quantity = 0;
      state.total = 0;
      state.isFetching = false;
      state.error = false;
    },

    deleteCartItemfailure: (state) => {
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
  },
});

export const {
  addProductStart,
  addProductSuccess,
  addProductFailure,
  fetchCartStart,
  fetchCartSuccess,
  fetchCartfailure,
  deleteCartStart,
  deleteCartSuccess,
  deleteCartfailure,
  deleteCartItemStart,
  deleteCartItemSuccess,
  deleteCartItemfailure,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

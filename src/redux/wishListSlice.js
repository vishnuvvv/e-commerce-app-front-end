import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlistItems: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //add items to  wishlist
    addToWishlistStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },

    addToWishlistSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.wishlistItems.push(action.payload);
    },
    addToWishlistFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //remove items from  wishlist
    removeFromWishlistStart: () => {},
    removeFromWishlistSuccess: () => {},
    removeFromWishlistFailure: () => {},
    //get items from  wishlist
    getWishlistStart: () => {},
    getWishlistSuccess: () => {},
    getWishlistFailure: () => {},
  },
});

export const {
  addToWishlistStart,
  addToWishlistSuccess,
  addToWishlistFailure,
  removeFromWishlistStart,
  removeFromWishlistSuccess,
  removeFromWishlistFailure,
  getWishlistStart,
  getWishlistSuccess,
  getWishlistFailure,
} = wishlistSlice.actions;
export default wishlistSlice.reducer;

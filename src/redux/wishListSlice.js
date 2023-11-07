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
      state.wishlistItems.push(action.payload.item);
    },
    addToWishlistFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //remove items from  wishlist
    removeFromWishlistStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    removeFromWishlistSuccess: (state, action) => {
      console.log(action.payload.removedItem);
      const deletedItemId = action.payload.removedItem._id;
      console.log(deletedItemId);
      const index = state.wishlistItems.findIndex(
        (item) => item._id === deletedItemId
      );

      if (index !== -1) {
        // If the item with the given _id is found, remove it from the array
        state.wishlistItems.splice(index, 1);
      } else {
        // Handle the case where the item is not found in the array
        console.log("Item not found in the wishlist");
      }
    },
    removeFromWishlistFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //get items from  wishlist
    getWishlistStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getWishlistSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      const newWishlistItems = action.payload; // Wishlist items from the action payload

      // Check for duplicates and add only unique products
      newWishlistItems.forEach((newItem) => {
        const isDuplicate = state.wishlistItems.some(
          (item) => item._id === newItem._id
        );

        if (!isDuplicate) {
          state.wishlistItems.push(newItem);
        }
      });
    },
    getWishlistFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    clearWishlist: (state) => {
      state.isFetching = false;
      state.error = false;
      state.wishlistItems = [];
    },
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
  clearWishlist,
} = wishlistSlice.actions;
export default wishlistSlice.reducer;

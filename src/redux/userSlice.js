import { createSlice } from "@reduxjs/toolkit";
import { clearCart } from "./cartSlice";
import { clearWishlist } from "./wishListSlice";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSucces: (state, action) => {
      state.currentUser = action.payload;
      state.isFetching = false;
      state.error = false;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
      clearCart();
      clearWishlist();
    },
  },
});

export const { loginStart, loginSucces, loginFailure, logout } =
  userSlice.actions;
export default userSlice.reducer;

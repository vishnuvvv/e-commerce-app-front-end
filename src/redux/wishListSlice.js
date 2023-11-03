import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
    isFetching: false,
    error: false,
  },
  reducers: {},
});

export default wishListSlice.reducer;

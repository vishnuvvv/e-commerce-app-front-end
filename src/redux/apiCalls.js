import { loginStart, loginSucces, loginFailure } from "./userSlice";
import { publicRequest, userRequest } from "../config/requestMethods";
import {
  addProductFailure,
  addProductStart,
  addProductSuccess,
  fetchCartStart,
  fetchCartSuccess,
  fetchCartfailure,
} from "./cartSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const response = await publicRequest.post("/api/auth/login", user);
    dispatch(loginSucces(response.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const addProductTocart = async (dispatch, cartItem) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post("/api/cart/add-cart", cartItem);
    dispatch(addProductSuccess(res.data));
  } catch (error) {
    dispatch(addProductFailure());
  }
};

export const getCartProducts = async (dispatch, userId) => {
  dispatch(fetchCartStart());
  try {
    const response = await userRequest.get(`/api/cart/get-user-cart/${userId}`);
    dispatch(fetchCartSuccess(response.data));
  } catch (error) {
    dispatch(fetchCartfailure());
  }
};

import { loginStart, loginSucces, loginFailure } from "./userSlice";
import { publicRequest, userRequest } from "../config/requestMethods";
import {
  addProductFailure,
  addProductStart,
  addProductSuccess,
  deleteCartStart,
  deleteCartSuccess,
  deleteCartfailure,
  fetchCartStart,
  fetchCartSuccess,
  fetchCartfailure,
} from "./cartSlice";

//login api call
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const response = await publicRequest.post("/api/auth/login", user);
    dispatch(loginSucces(response.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

//add to cart api call
export const addProductTocart = async (dispatch, cartItem) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post("/api/cart/add-cart", cartItem);
    dispatch(addProductSuccess(res.data));
  } catch (error) {
    dispatch(addProductFailure());
  }
};

//get cart items api call

export const getCartProducts = async (dispatch, userId) => {
  dispatch(fetchCartStart());
  try {
    const response = await userRequest.get(`/api/cart/get-user-cart/${userId}`);
    dispatch(fetchCartSuccess(response.data));
  } catch (error) {
    dispatch(fetchCartfailure());
  }
};

//delete cart

export const deleteAllCartItems = async (dispatch, userId) => {
  dispatch(deleteCartStart());
  try {
    await userRequest.delete(`/api/cart/delete-cart/${userId}`);
    dispatch(deleteCartSuccess());
  } catch (error) {
    dispatch(deleteCartfailure());
  }
};

//delete single item from the cart

export const deleteSingleCartItem = async(dispatch, userId, itemId) =>{
  dispatch()
  try {
    
  } catch (error) {
    
  }
}

import axios from "axios";

const BASE_URL = "http://localhost:5000";

const userData = localStorage.getItem("persist:root");
const user = userData ? JSON.parse(userData).user : null;
const currentUser = user ? JSON.parse(user).currentUser : null;
const token = currentUser ? currentUser.accessToken : null;
console.log(token);


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${token}` },
});

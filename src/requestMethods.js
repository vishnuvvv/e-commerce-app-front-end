import axios from "axios";

const BASE_URL = "http://localhost:5000";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTcyYjIwMTlhNTVkMjc1MDYzM2Y4OSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2OTIzNzI2NTIsImV4cCI6MTY5Mjk3NzQ1Mn0.75Nx9mYKzhxyU-Ii9cTkct0alGi7DlPH533tgnn-BmM";


export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
})
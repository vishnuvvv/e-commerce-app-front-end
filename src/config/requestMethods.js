import axios from "axios";

const BASE_URL = "http://localhost:5000";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDdiNjA2ZjU0YTBhZjY0ZTRlMzVlMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NDI3MDA1NSwiZXhwIjoxNjk0ODc0ODU1fQ.fE37r7FBlK1tQpdgxSOXrDOlTT5vDhBBJHPhb-p6oDg";


export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
})
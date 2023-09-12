import React from "react";
import Home from "../src/pages/Home/Home";
import Login from "../src/pages/Login/Login";
import Register from "../src/pages/Register/Register";
import ProductList from "../src/pages/ProductList/ProductList";
import ProductPage from "../src/pages/ProductPage/ProductPage";
import Cart from "../src/pages/Cart/Cart";
import Success from "../src/pages/Success/Success";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cancel from "./pages/Cancel/Cancel";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  console.log(user)
  //const navigate = useNavigate();
  //user ? navigate("/") : navigate("/register");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

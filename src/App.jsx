import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../src/pages/Home/Home";
import Login from "../src/pages/Login/Login";
import Register from "../src/pages/Register/Register";
import ProductList from "../src/pages/ProductList/ProductList";
import ProductPage from "../src/pages/ProductPage/ProductPage";
import Cart from "../src/pages/Cart/Cart";
import Success from "../src/pages/Success/Success";
import Cancel from "./pages/Cancel/Cancel";
import WishList from "./pages/WishList/WishList";
import Orders from "./pages/Orders/Orders";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  // Custom route rendering function
  const ProtectedRoute = ({ element, path }) => {
    if (user) {
      return element;
    } else {
      window.alert(`Please log in to access this path.`);
      return <Navigate to="/" />;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:category" element={<ProductList />} />

        {user ? (
          <>
            {/* Logged-in user */}
            <Route path="/login" element={<Navigate to="/" />} />
            <Route path="/register" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            {/* Not logged-in user */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}

        {/* Protected routes for authenticated users */}

        <Route
          path="/product/:productId"
          element={<ProtectedRoute element={<ProductPage />} />}
        />
        <Route path="/cart" element={<ProtectedRoute element={<Cart />} />} />
        <Route
          path="/wishlists"
          element={<ProtectedRoute element={<WishList />} />}
        />
        <Route
          path="/orders"
          element={<ProtectedRoute element={<Orders />} />}
        />
        <Route
          path="/success"
          element={<ProtectedRoute element={<Success />} />}
        />
        <Route
          path="/cancel"
          element={<ProtectedRoute element={<Cancel />} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

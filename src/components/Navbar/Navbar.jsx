import {
  Search,
  ShoppingCartOutlined,
  LogoutTwoTone,
  Home,
} from "@mui/icons-material";
import FolderSpecialRoundedIcon from "@mui/icons-material/FolderSpecialRounded";
import { Badge } from "@mui/material";
import React from "react";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/userSlice";

const Navbar = () => {
  const { products } = useSelector((state) => state.cart);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const quantity = products.length;

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    window.alert("Are you sure you want logout?");
    !currentUser && navigate("/");
  };

  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-left-section">
          <div className="nav-left-home-icon">
            <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
              <Home />
            </Link>
          </div>
          <span className="language-icon-left">EN</span>
          <div className="search-container-left">
            <input className="input-field-left" />
            <Search style={{ color: "grey", fontSize: 16 }} />
          </div>
        </div>
        <div className="navbar-middle-section">
          <h1 className="main-logo">Wavie~Shop</h1>
        </div>
        <div className="navbar-right-section">
          {!currentUser && (
            <>
              <div className="menu-item-right">
                {" "}
                <Link
                  to="/register"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  REGISTER
                </Link>
              </div>
              <div className="menu-item-right">
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  SIGN-IN
                </Link>
              </div>
            </>
          )}

          {currentUser && (
            <>
              <div className="menu-item-right">
                <p className="nav-username">{`Hello ${currentUser.username}`}</p>
              </div>

              <div className="menu-item-right">
                <LogoutTwoTone onClick={handleLogout} />
              </div>

              <div className="menu-item-right">
                <Link
                  to="/wishlists"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Badge>
                    <FolderSpecialRoundedIcon />
                  </Badge>
                </Link>
              </div>

              <div className="menu-item-right">
                <Link
                  to="/cart"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Badge badgeContent={quantity} color="warning">
                    <ShoppingCartOutlined />
                  </Badge>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

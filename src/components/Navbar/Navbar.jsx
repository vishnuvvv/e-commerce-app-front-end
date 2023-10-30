import {
  Search,
  ShoppingCartOutlined,
  LogoutTwoTone,
} from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/userSlice";

const Navbar = () => {
  const { quantity } = useSelector((state) => state.cart);
  const { currentUser } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //console.log(quantity);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    currentUser && navigate("/login");
  };

  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-left-section">
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
          <div className="menu-item-right">
            {" "}
            <Link to="/register" style={{ textDecoration: "none" }}>
              REGISTER
            </Link>
          </div>
          <div className="menu-item-right">
            <Link to="/login" style={{ textDecoration: "none" }}>
              SIGN-IN
            </Link>
          </div>

          <div className="menu-item-right">
            <LogoutTwoTone onClick={handleLogout} />
          </div>

          <div className="menu-item-right">
            <Link to="/cart">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

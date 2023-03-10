import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import "./Navbar.css";

const Navbar = () => {
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
          <div className="menu-item-right">REGISTER</div>
          <div className="menu-item-right">SIGN-IN</div>
          <div className="menu-item-right">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import "../Cart/Cart.css";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/footer/Footer";

const Cart = () => {
  return (
    <div className="cart-container">
      <Navbar />
      <Announcement />
      <div className="cart-wrap">
        <h1 className="cart-title">Cart</h1>
        <div className="top-cart">
          <button className="cart-top-btn-one">CONTINUE SHOPPING</button>
          <div className="top-text-area">
            <span className="top-txt">Shopping Bag (2)</span>
            <span className="top-txt">Your Wishlist</span>
          </div>
          <button className="cart-top-btn-two">CHECKOUT NOW</button>
        </div>
        <div className="bottom-cart">
          <div className="cart-prct-info">
            <div className="cart-prcdt">
              <div className="cart-prct-detail">
                <img
                  src="https://img.freepik.com/free-photo/leather-boots_1203-8142.jpg?w=1380&t=st=1678903876~exp=1678904476~hmac=32e4d919f6366f43cd11ba8bcb0704d551acdc0be756db6714aca913770af8d0"
                  alt="prct"
                  className="cart-prct-img"
                />
                <div className="prct-detail">
                  <span className="prct_name">
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </span>
                  <span className="prct_id">
                    <b>ID:</b> 92856445664
                  </span>
                  <div className="prct-clr"></div>
                  <span className="prct-size">
                    <b>Size</b> 37.5
                  </span>
                </div>
                <div className="cart-prct-prize-dtls">Price</div>
              </div>
            </div>
          </div>
          <div className="cart-prct-summary"> Summary</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;

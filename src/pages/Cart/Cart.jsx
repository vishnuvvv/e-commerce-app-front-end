import React from "react";
import "../Cart/Cart.css";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/footer/Footer";
import { Add, Remove } from "@mui/icons-material";

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
                    <b>Size:</b> 37.5
                  </span>
                </div>
                <div className="cart-prct-prize-dtls">
                  <div className="prct-amount-cntr">
                    <Add sx={{cursor:"pointer"}}/>
                    <div className="prct-amont">2</div>
                    <Remove sx={{cursor: "pointer"}}/>
                  </div>
                  <div className="prct-amont-ttl">Rs.907</div>
                </div>
              </div>
            </div>
            <hr className="line-breaker"/>
            <div className="cart-prcdt">
              <div className="cart-prct-detail">
                <img
                  src="https://img.freepik.com/free-photo/blue-t-shirt_125540-727.jpg?w=1060&t=st=1678906807~exp=1678907407~hmac=fbca8b742ad467836b5fb24a0d1ab0a8bc055492852799551817f1adf6426990"
                  alt="prct"
                  className="cart-prct-img"
                />
                <div className="prct-detail">
                  <span className="prct_name">
                    <b>Product:</b> ALLEN SOLLY BLUE TEA-SHIRT
                  </span>
                  <span className="prct_id">
                    <b>ID:</b> 92856445664
                  </span>
                  <div className="prct-clr"></div>
                  <span className="prct-size">
                    <b>Size:</b>M
                  </span>
                </div>
                <div className="cart-prct-prize-dtls">
                  <div className="prct-amount-cntr">
                    <Add sx={{cursor: "pointer"}}/>
                    <div className="prct-amont">1</div>
                    <Remove sx={{cursor: "pointer"}}/>
                  </div>
                  <div className="prct-amont-ttl">Rs.1507</div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-prct-summary">
            <h1 className="summary-title">ORDER SUMMARY</h1>
            <div className="summary-item">
             <span className="summary-item-text">Subtotal:</span>
             <span className="summary-item-price">Rs.2414</span>
            </div>
            <div className="summary-item">
             <span className="summary-item-text">Estimated-shipping:</span>
             <span className="summary-item-price">Rs.50</span>
            </div>
            <div className="summary-item">
             <span className="summary-item-text">Discount:</span>
             <span className="summary-item-price">Rs.-399</span>
            </div>
            <div className="summary-item">
             <span className="summary-item-text">Total:</span>
             <span className="summary-item-price">Rs.2013</span>
            </div>
            <button className="summary-button">CHECKOUT NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;

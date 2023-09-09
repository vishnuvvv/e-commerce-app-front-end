import React, { useState } from "react";
import "../Cart/Cart.css";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/footer/Footer";
import { Add, Remove } from "@mui/icons-material";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";


const Cart = () => {
 
  const [stripeToken, setStripeToken] = useState();
  const cart = useSelector((state) => state.cart);
  const KEY = process.env.REACT_APP_STRIPE_KEY;

  const onToken = (token) => {
    setStripeToken(token);
  };
  console.log(stripeToken);
  console.log(KEY);

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
          <div className="cart-prct-info-container">
            {cart.products.map((product) => (
              <div className="cart-prct-info">
                <div className="cart-prcdt">
                  <div className="cart-prct-detail">
                    <img
                      src={product.img}
                      alt="prct"
                      className="cart-prct-img"
                    />
                    <div className="prct-detail">
                      <span className="prct_name">
                        <b>Product:</b> {product.title}
                      </span>
                      <span className="prct_id">
                        <b>ID: </b> {product._id}
                      </span>
                      <div
                        className="prct-clr"
                        style={{ backgroundColor: product.color }}
                      ></div>
                      <span className="prct-size">
                        <b>Size:{product.size}</b>
                      </span>
                    </div>
                    <div className="cart-prct-prize-dtls">
                      <div className="prct-amount-cntr">
                        <Add sx={{ cursor: "pointer" }} />
                        <div className="prct-amont">{product.quantity}</div>
                        <Remove sx={{ cursor: "pointer" }} />
                      </div>
                      <div className="prct-amont-ttl">Rs.{product.price}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-prct-summary">
            <h1 className="summary-title">ORDER SUMMARY</h1>
            <div className="summary-item">
              <span className="summary-item-text">Subtotal:</span>
              <span className="summary-item-price">Rs.{cart.total}</span>
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
              <span className="summary-item-price">{cart.total}</span>
            </div>
            <StripeCheckout
              name="Wavie Shope"
              image="https://upload.wikimedia.org/wikipedia/commons/2/2c/Minnesota_Vikings_V_logo.png"
              billingAddress
              shippingAddress
              description={`Your total is Rs.${cart.total}`}
              amount={cart.total}
              token={onToken}
              stripeKey={KEY}
            >
              <button className="summary-button">CHECKOUT NOW</button>
            </StripeCheckout>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;

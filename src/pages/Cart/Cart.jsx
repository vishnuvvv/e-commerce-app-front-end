import "../Cart/Cart.css";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/footer/Footer";
import { Add, Remove } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Link } from "react-router-dom";
import { userRequest } from "../../config/requestMethods";
import { useEffect } from "react";
import { deleteAllCartItems, getCartProducts } from "../../redux/apiCalls";
//import { clearCart } from "../../redux/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const { currentUser } = useSelector((state) => state.user);
  const { products, total } = cart;
 
  

  const creatOrder = async () => {
    console.log("createOrder starts");
    try {
      const res = await userRequest.post("/api/orders/create-order", {
        userId: currentUser._id,
        products,
        amount: total,
      });
      if (res.ok) {
        console.log(res);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const makePayment = async () => {
    const KEY = process.env.REACT_APP_STRIPE_KEY;
    try {
      const stripe = await loadStripe(KEY);

      const response = await fetch(
        "http://localhost:5000/api/checkout/payment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ products: cart.products }),
        }
      );

      console.log(response.ok);

      if (response) {
        creatOrder();
      }
      if (!response.ok) throw new Error("Payment request failed");

      const session = await response.json();
      const result = stripe.redirectToCheckout({ sessionId: session.id });

      if (result.error) throw new Error(result.error.message);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const dispatch = useDispatch();

  const handleClearCart = () => {
    deleteAllCartItems(dispatch, currentUser._id);
    //dispatch(clearCart());
  };

  useEffect(() => {
    if (currentUser && currentUser._id) {
      getCartProducts(dispatch, currentUser._id);
    }
  }, [currentUser, dispatch]);

  return (
    <div className="cart-container">
      <Navbar />
      <Announcement />
      <div className="cart-wrap">
        <h1 className="cart-title">Cart</h1>
        <div className="top-cart">
          <Link to={"/"}>
            <button className="cart-top-btn-one">CONTINUE SHOPPING</button>
          </Link>
          <div className="top-text-area">
            <span className="top-txt">Shopping Bag (2)</span>
            <span className="top-txt">Your Wishlist</span>
            <button onClick={handleClearCart}>clear cart</button>
          </div>
          <button className="cart-top-btn-two" onClick={makePayment}>
            CHECKOUT NOW
          </button>
        </div>
        <div className="bottom-cart">
          <div className="cart-prct-info-container">
            {products.map((product) => (
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

            <button
              className="summary-button"
              type="button"
              onClick={makePayment}
            >
              CHECKOUT NOW
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;

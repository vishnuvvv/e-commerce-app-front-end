import React from "react";
import "./WishList.css";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { DeleteForeverRounded } from "@mui/icons-material";
import {
  // addProductTocart,
  // getCartProducts,
  removeItemFromWishlist,
} from "../../redux/apiCalls";

const WishList = () => {
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const userId = currentUser._id;
  const deleteItem = (dispatch, userId, item) => {
    removeItemFromWishlist(dispatch, userId, item);
  };

  // const addToCart = async (dipsatch, userId, item) => {
  //   const uid = userId;
  //   const productData = item;
  //   try {
  //     // Add the product to the cart
  //     await addProductTocart(dispatch, { uid, productData });

  //     // Fetch the updated cart data after successfully adding the product
  //     await getCartProducts(dispatch, userId);
  //   } catch (error) {
  //     console.error("Error adding product to cart:", error);
  //   }
  // };

  return (
    <>
      <Navbar />
      <Announcement />

      <div className="wishlist-container">
        <div className="wishlist-box">
          {wishlistItems.length === 0 ? (
            <p className="empty-wishlist-message">Your wishlist is empty.</p>
          ) : (
            wishlistItems.map((item) => (
              <div key={item._id} className="wishlist-card">
                <img src={item.img} alt={item.title} />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p>Rs.{item.price}</p>
                <DeleteForeverRounded
                  className="delete-icon-wish"
                  onClick={() => deleteItem(dispatch, userId, item)}
                />
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WishList;

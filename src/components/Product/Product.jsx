import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToWishlist,
  removeItemFromWishlist,
} from "../../redux/apiCalls.js";

const Product = ({ item }) => {
  const { currentUser } = useSelector((state) => state.user);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const dispatch = useDispatch();
  const userId = currentUser?._id;
  console.log(isInWishlist);
  console.log(wishlistItems);

  const addWishlist = async () => {
    await addItemToWishlist(dispatch, userId, item);
  };

  const removeWishlist = async () => {
    removeItemFromWishlist(dispatch, userId, item);
  };

  const handleWishlist = async () => {
    if (isInWishlist) {
      await removeWishlist();
    } else {
      await addWishlist();
    }
  };
  return (
    <div className="product-box">
      <div className="product-circle"></div>
      <img className="product-image" src={item.img} alt="" />
      <div className="product-info">
        <div className="product-icons">
          <ShoppingCartOutlined />
        </div>
        <div className="product-icons">
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </div>
        <div className="product-icons">
          <button onClick={handleWishlist}>
            <FavoriteBorderOutlined
              style={{ color: isInWishlist ? "red" : "inherit" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

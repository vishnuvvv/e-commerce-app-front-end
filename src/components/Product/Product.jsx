import {
  Favorite,
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { userRequest } from "../../config/requestMethods";

const Product = ({ item }) => {
  const { currentUser } = useSelector((state) => state.user);
  const userId = currentUser?._id;
  const wishlistState = useSelector((state) => state.user.isInWishlist);

  const [isInWishlist, setIsInWishlist] = useState(!wishlistState);

  const handleWishlist = async () => {
    if (isInWishlist) {
      await removeWishlist();
    } else {
      await addWishlist();
    }
  };

  const addWishlist = async () => {
    const res = await userRequest.post(`/product/wishlist/${userId}`, {
      item,
    });
    setIsInWishlist(!isInWishlist);
    console.log(res)
    // dispatch(toWishlist(isInWishlist, item));
  };

  const removeWishlist = async () => {
    const res = await userRequest.delete(`/product/wishlist/${userId}`, {
      item,
    });
    setIsInWishlist(!isInWishlist);
    console.log(res)
    // dispatch(toWishlist(isInWishlist, item));
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
            {isInWishlist ? (
              <Favorite style={{ color: "red" }} />
            ) : (
              <FavoriteBorderOutlined />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

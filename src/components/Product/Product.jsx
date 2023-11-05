import {
  Favorite,
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToWishlist,
  removeItemFromWishlist,
} from "../../redux/apiCalls.js";
import { clearWishlist } from "../../redux/wishListSlice";

const Product = ({ item }) => {
  const { currentUser } = useSelector((state) => state.user);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const dispatch = useDispatch();
  const userId = currentUser?._id;

  const addWishlist = async () => {
    await addItemToWishlist(dispatch, userId, item);
  };

  const removeWishlist = async () => {
    removeItemFromWishlist(dispatch, userId, item);
  };

  const isExistsInWishlist = (wishlistItems, item) => {
    setIsInWishlist(
      wishlistItems.some((existItem) => existItem.item._id === item._id)
    );
  };
  useEffect(() => {
    isExistsInWishlist(wishlistItems, item);
  }, [wishlistItems, item]);

  const handleWishlist = async () => {
    if (isInWishlist) {
      await removeWishlist();
    } else {
      await addWishlist();
    }
  };

  const clearAllWishlist = () => {
    dispatch(clearWishlist());
    console.log(wishlistItems);
  };
  return (
    <div className="product-box">
      <div className="product-circle"></div>
      <img className="product-image" src={item.img} alt="" />
      <div className="product-info">
        <div className="product-icons">
          <ShoppingCartOutlined onClick={clearAllWishlist} />
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

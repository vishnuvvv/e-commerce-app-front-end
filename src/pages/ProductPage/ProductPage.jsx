import React, { useEffect, useState } from "react";
import "../ProductPage/ProductPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import { Add, Remove } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { publicRequest } from "../../config/requestMethods";
import { useDispatch, useSelector } from "react-redux";
import { addProductTocart, getCartProducts } from "../../redux/apiCalls";

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const currentUser = user.currentUser;
  const userId = user.currentUser._id;


  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(
          `/api/products/get-product/${productId}`
        );
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [productId]);

  const handleQauntity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  // useEffect(() => {
  //   if (currentUser && currentUser._id) {
  //     getCartProducts(dispatch, currentUser._id);
  //   }
  // }, [dispatch, currentUser]);

  const handleClick = async () => {
    const uid = userId;
    const productData = { ...product, quantity, color, size };

    try {
      // Add the product to the cart
      await addProductTocart(dispatch, { uid, productData });

      // Fetch the updated cart data after successfully adding the product
      await getCartProducts(dispatch, currentUser._id);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  return (
    <div className="product-page-container">
      <Navbar />
      <Announcement />
      <div className="single-product-cntr-wrap">
        <div className="single-prct-img-cntr">
          <img className="single-prct-img" src={product.img} alt="denim-pic" />
        </div>
        <div className="single-prct-info-cntr">
          <h1 className="single-prct-title">{product.title}</h1>
          <p className="single-prtc-desc">{product.desc}</p>
          <span className="single-prtc-prize">Rs.{product.price}</span>
          <div className="single-prct-filter-cntr">
            <div className="filter-optn-div">
              <span className="prct-filter-title">Color:</span>
              {product?.color?.map((color, index) => (
                <div
                  key={index}
                  className="single-prct-color"
                  style={{ backgroundColor: color }}
                  onClick={() => setColor(color)}
                ></div>
              ))}
            </div>
            <div className="filter-optn-div">
              <span className="prct-filter-title">Size:</span>
              <select
                className="prct-filter-size-select"
                onChange={(e) => setSize(e.target.value)}
              >
                {product?.size?.map((size, index) => (
                  <option key={index} className="prct-filter-size-optn">
                    {size}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="add-cntr">
            <div className="amnt-cntr">
              <Remove
                onClick={() => handleQauntity("dec")}
                sx={{ color: "red" }}
              />
              <span className="prct-amount">{quantity}</span>
              <Add
                onClick={() => handleQauntity("inc")}
                sx={{ color: "green" }}
              />
            </div>
            <button className="prct-add-btn" onClick={handleClick}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductPage;

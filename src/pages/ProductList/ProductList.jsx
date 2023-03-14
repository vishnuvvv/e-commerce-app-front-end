import React from "react";
import "../ProductList/ProductList.css";

import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Products from "../../components/Products/Products";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/footer/Footer";

const ProductList = () => {
  return (
    <div className="product-list-container-main">
      <Navbar />
      <Announcement />
      <h1 className="dresses-title">Dresses</h1>
      <div className="product-list-filter-container">
        <div className="filter-one">
          <span className="filter-text-proudct-list">Filter Products:</span>
          <select>
            <option disabled selected>Color</option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>
          <select>
            <option disabled selected>Size</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="filter-two">
          <span className="filter-text-proudct-list">Sort Products:</span>
          <select>
            <option selected> Newest</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </select>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;

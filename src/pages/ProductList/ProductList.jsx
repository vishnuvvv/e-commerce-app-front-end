import React, { useState } from "react";
import "../ProductList/ProductList.css";

import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Products from "../../components/Products/Products";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router-dom";

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("newest")

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value
    })
  }

  console.log(filters);

  return (
    <div className="product-list-container-main">
      <Navbar />
      <Announcement />
      <h1 className="dresses-title">{cat}</h1>
      <div className="product-list-filter-container">
        <div className="filter-one">
          <span className="filter-text-proudct-list">Filter Products:</span>
          <select name="color" onChange={handleFilters}>
            <option disabled >Color</option>
            <option>white</option>
            <option>black</option>
            <option>beige</option>
            <option>blue</option>
            <option>yellow</option>
            <option>brown</option>
          </select>
          <select name="size" onChange={handleFilters}>
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
          <select onChange={(e) => setSort(e.target.value)}>
            <option value="newest"> Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;

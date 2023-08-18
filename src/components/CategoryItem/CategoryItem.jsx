import React from "react";
import "./CategoryItem.css";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <div className="container-category-item">
      <Link to={`/products/${item.cat}`}>
      <img src={item.img} alt="can't display" className="image-category-item" />
      <div className="info-category-item">
        <h1 className="title-category-item">{item.title}</h1>
        <button className="button-category-item">SHOP NOW</button>
      </div>
      </Link>
    </div>
  );
};

export default CategoryItem;

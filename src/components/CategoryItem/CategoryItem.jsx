import React from "react";
import "./CategoryItem.css";

const CategoryItem = ({ item }) => {
  return (
    <div className="container-category-item">
      <img src={item.img} alt="can't display" className="image-category-item" />
      <div className="info-category-item">
        <h1 className="title-category-item">{item.title}</h1>
        <button className="button-category-item">SHOP NOW</button>
      </div>
    </div>
  );
};

export default CategoryItem;

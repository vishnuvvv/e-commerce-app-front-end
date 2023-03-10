import React from "react";
import "./Categories.css";
import CategoryItem from "../CategoryItem/CategoryItem";
import { categories } from "../../data";

const Categories = () => {
  return (
    <div className="container">
      {categories.map(item => (
        <CategoryItem item ={item} key={item.id}/>
      ))}
    </div>
  );
};

export default Categories;

import React from "react";
import "./Products.css"
import { cartProducts } from "../../data";
import Product from "../Product/Product";

const Products = () => {
  return (
    <div className="products-container">
      {cartProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;

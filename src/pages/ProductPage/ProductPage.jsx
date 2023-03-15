import React from "react";
import "../ProductPage/ProductPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import { Add, Remove } from "@mui/icons-material";

const ProductPage = () => {
  return (
    <div className="product-page-container">
      <Navbar />
      <Announcement />
      <div className="single-product-cntr-wrap">
        <div className="single-prct-img-cntr">
          <img
            className="single-prct-img"
            src="https://i.ibb.co/S6qMxwr/jean.jpg"
            alt="denim-pic"
          />
        </div>
        <div className="single-prct-info-cntr">
          <h1 className="single-prct-title">Denim</h1>
          <p className="single-prtc-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
            ratione a. Ducimus fugiat illo officia eius error alias
            exercitationem voluptates magni voluptas. Incidunt, fuga
            perspiciatis quibusdam expedita laboriosam molestias? Atque.
          </p>
          <span className="single-prtc-prize">Rs.1079</span>
          <div className="single-prct-filter-cntr">
            <div className="filter-optn-div">
              <span className="prct-filter-title">Color:</span>
              <div className="single-prct-color"></div>
              <div className="single-prct-color"></div>
              <div className="single-prct-color"></div>
            </div>
            <div className="filter-optn-div">
              <span className="prct-filter-title">Size:</span>
              <select className="prct-filter-size-select">
                <option className="prct-filter-size-optn">XS</option>
                <option className="prct-filter-size-optn">S</option>
                <option className="prct-filter-size-optn">M</option>
                <option className="prct-filter-size-optn">L</option>
                <option className="prct-filter-size-optn">XL</option>
              </select>
            </div>
          </div>
          <div className="add-cntr">
            <div className="amnt-cntr">
              <Remove sx={{color:"red"}}/>
              <span className="prct-amount">1</span>
              <Add sx={{color:"green"}}/>
            </div>
            <button className="prct-add-btn">ADD TO CART</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductPage;

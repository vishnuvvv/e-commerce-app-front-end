import React from "react";
import "./Success.css";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
const Success = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>

      <Navbar />
      <Announcement />
      <div className="container-success-cp">
        <h1 className="heading-success-cp">
          Congratulations Payment successful !!!
        </h1>
        <div className="button-container-cp">
          <Link to={"/orders"}>
          <button className="view-orders-button-cp">View Orders</button>
          </Link>
          <Link to={"/"}>
          <button className="continue-shopping-button-cp">
            Continue Shopping
          </button>
          </Link>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Success;

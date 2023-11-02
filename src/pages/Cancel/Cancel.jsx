import React from "react";
import "./Cancel.css";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Cancel = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <div className="container-cancel">
        <h1 className="heading-cancel">Payment Failed!</h1>
        <div className="button-container-cancel">
          <Link to="/">
            {" "}
            <button className="return-shopping-button">
              Return to Shopping
            </button>
          </Link>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Cancel;

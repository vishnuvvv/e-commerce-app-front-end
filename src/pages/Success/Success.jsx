import React from "react";
import "./Success.css"
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
const Success = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Announcement />
      <Navbar />
      <div style={{ alignItems: "center", justifyContent: "center" }}>
        <h1>Congratulations Payment successful !!!</h1>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Success;

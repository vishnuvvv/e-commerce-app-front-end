import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/footer/Footer";

const Cancel = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <div>
        <h1>Payment Failed!</h1>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Cancel;

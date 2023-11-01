import React from "react";
import "./Orders.css";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
const Orders = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <div>Orders</div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Orders;

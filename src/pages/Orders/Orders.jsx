import React from "react";
import "./Orders.css";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/footer/Footer";

const Orders = () => {

  const image = "https://bornbabies.com/public/main_category/Girl%20Clothes.webp"
  return (
    <>

      <Navbar />
      <Announcement />
      <div className="orders-container-oz">
        <p className="view-all-heading-oz">View all orders</p>
        <div className="order-card-oz">
          <div className="order-image-oz">
            <img src={image} alt="Order" />
          </div>
          <div className="order-details-oz">
            <h3>Order ID: #12345</h3>
            <p>Total Amount: $100.00</p>
            <p>Shipped: 10/30/2023</p>
            <p>Delivered: 11/05/2023</p>
            {/* <!-- Add more order details here --> */}
          </div>
        </div>
        <div className="order-card-oz">
          <div className="order-image-oz">
            <img src={image} alt="Order" />
          </div>
          <div className="order-details-oz">
            <h3>Order ID: #12345</h3>
            <p>Total Amount: $100.00</p>
            <p>Shipped: 10/30/2023</p>
            <p>Delivered: 11/05/2023</p>
            {/* <!-- Add more order details here --> */}
          </div>
        </div>
        <div className="order-card-oz">
          <div className="order-image-oz">
            <img src={image} alt="Order" />
          </div>
          <div className="order-details-oz">
            <h3>Order ID: #12345</h3>
            <p>Total Amount: $100.00</p>
            <p>Shipped: 10/30/2023</p>
            <p>Delivered: 11/05/2023</p>
            {/* <!-- Add more order details here --> */}
          </div>
        </div> 
        {/* <!-- Repeat order-card for each order --> */}
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Orders;

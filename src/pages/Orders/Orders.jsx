import React, { useEffect, useState } from "react";
import "./Orders.css";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import { userRequest } from "../../config/requestMethods";
import { useSelector } from "react-redux";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { currentUser } = useSelector((state) => state.user);
  const id = currentUser._id;
  const getUserOrders = async (id) => {
    try {
      const res = await userRequest.get(`/api/orders/get-user-orders/${id}`);
      setOrders(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUserOrders(id);
  }, [id]);
  return (
    <>
      <Navbar />
      <Announcement />
      <div className="orders-container-oz">
        <p className="view-all-heading-oz">View all orders</p>
        <div>
          {orders.length === 0 ? (
            <p className="no-orders-message">No orders found. You have not ordered anything yet.</p>
          ) : (
            orders.map((order) => (
              <div key={order._id} className="order-container-oz">
                <h5>Order ID: {order._id}</h5>
                <p>
                  Ordered On: {new Date(order.createdAt).toLocaleDateString()}
                </p>
                <div className="order-card-oz">
                  {order.products.map((product) => (
                    <div key={product._id} className="product-card-oz">
                      <div className="product-image-oz">
                        <img src={product.img} alt={product.title} />
                      </div>
                      <div className="product-details-oz">
                        <h3>{product.title}</h3>
                        <p>Price: ${product.price}</p>
                      </div>
                      <div className="delete-button-oz">
                        <button>Cancel Order</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Orders;

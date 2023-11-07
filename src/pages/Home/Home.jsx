import React, { useEffect } from "react";
import Announcement from "../../components/Announcement/Announcement";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import Products from "../../components/Products/Products";
import Slider from "../../components/Slider/Slider";
import { useDispatch, useSelector } from "react-redux";
import { getAllWishlistItems, getCartProducts } from "../../redux/apiCalls";

const Home = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser && currentUser._id) {
      getCartProducts(dispatch, currentUser._id);
      getAllWishlistItems(dispatch, currentUser._id);
    }
  }, [dispatch, currentUser]);
  return (
    <div>

      <Navbar />
      <Announcement />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;

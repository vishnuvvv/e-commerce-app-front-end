import React from "react";
import "./WishList.css";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/footer/Footer";

const WishList = () => {

  const wishlistItems = [
    {
      id: 1,
      title: 'Product 1',
      description: 'Description of Product 1',
      price: '$10.99',
      image: 'https://www.jiomart.com/images/product/original/rvyljxmyse/sagun-dresses-girls-light-blue-a-line-frock-7-8-yrs-kids-wear-girls-frock-kids-party-wear-clothing-accessories-baby-girls-dresses-frock-product-images-rvyljxmyse-0-202212010957.jpg?im=Resize=(500,630)',
    },
    {
      id: 2,
      title: 'Product 2',
      description: 'Description of Product 2',
      price: '$19.99',
      image: 'https://bornbabies.com/public/main_category/Girl%20Clothes.webp',
    },
   
    // Add more wishlist items here
  ];
  return (
    <>
      <Navbar />
      <Announcement />

      <div className="wishlist-container">
        <div className="wishlist-box">
          {wishlistItems.map((item) => (
            <div key={item.id} className="wishlist-card">
              <img src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>{item.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default WishList;

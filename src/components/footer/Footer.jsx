import {
  Facebook,
  Instagram,
  MailOutline,
  PhoneOutlined,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <h1 className="footer-logo">Wavie~shop</h1>
        <div className="footer-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse harum,
          rem enim alias at quia eveniet atque dignissimos sit autem aliquid
          maiores libero vero omnis aperiam porro. Fugit, nulla culpa?
        </div>
        <div className="footer-social">
          <div className="footer-icon">
            <Facebook />
          </div>
          <div className="footer-icon">
            <Instagram />
          </div>
          <div className="footer-icon">
            <Twitter />
          </div>
          <div className="footer-icon">
            <Pinterest />
          </div>
        </div>
      </div>
      <div className="footer-center">
        <h3 className="footer-title-links">Useful Links</h3>
        <ul className="footer-ul">
          <li className="footer-li">Home</li>
          <li className="footer-li">Cart</li>
          <li className="footer-li">Man Fashion</li>
          <li className="footer-li">Accessories</li>
          <li className="footer-li">My Account</li>
          <li className="footer-li">Order Tracking</li>
          <li className="footer-li">Wishlist</li>
          <li className="footer-li">Terms</li>
        </ul>
      </div>
      <div className="footer-right">
        <h3 className="footer-contact-title">Contact</h3>
        <div className="contact-item">
          <Room style={{ marginRight: "10px" }} />
          44A Electronic city Bangalore
        </div>
        <div className="contact-item">
          <PhoneOutlined style={{ marginRight: "10px" }}/> +91 5677 098
        </div>
        <div className="contact-item">
          <MailOutline style={{ marginRight: "10px" }}/> cotact@wavie.in
        </div>
        <img
          src="https://i.ibb.co/Qfvn4z6/payment.png"
          alt="see ctc"
          className="payment-img"
        />
      </div>
    </div>
  );
};

export default Footer;

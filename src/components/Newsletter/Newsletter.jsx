import { Send } from "@mui/icons-material";
import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="container-news">
      <h1 className="title-news">Newsletter</h1>
      <p className="description">
        Get timely updates from your favourite products.
      </p>
      <div className="input-container">
        <input className="input-field" placeholder="your email" />
        <button className="news-button">
          <Send />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;

import React from "react";
import "../Register/Register.css";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-wrapper">
        <h1 className="register-title">CREATE AN ACCOUNT</h1>
        <form className="register-form">
          <input placeholder="first name" className="rgtr-input" />
          <input placeholder="last-name" className="rgtr-input" />
          <input placeholder="user name" className="rgtr-input" />
          <input placeholder="email" className="rgtr-input" />
          <input placeholder="password" className="rgtr-input" />
          <input placeholder="confirm password" className="rgtr-input" />
          <span className="rgtr-agreement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the<br/> <b>PRIVACY POLICY</b>
          </span>
          <button className="rgtr-button">CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default Register;

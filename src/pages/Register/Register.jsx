import React, { useRef } from "react";
import "../Register/Register.css";
import { publicRequest } from "../../config/requestMethods";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/footer/Footer";

const Register = () => {
  const formRef = useRef();
  const navigate = useNavigate();

  const formSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {};

    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      const res = await publicRequest.post("/api/auth/register", data);
      if (res.status === 201) {
        window.alert("you have registerd succesfully! click here to login");
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <Announcement />
      <div className="register-container">
        <div className="register-wrapper">
          <h1 className="register-title">CREATE AN ACCOUNT</h1>
          <form className="register-form" ref={formRef}>
            <input
              name="username"
              placeholder="user name"
              className="rgtr-input"
            />
            <input name="email" placeholder="email" className="rgtr-input" />
            <input
              name="password"
              placeholder="password"
              className="rgtr-input"
            />
            <input
              name="confirmPassword"
              placeholder="confirm password"
              className="rgtr-input"
            />
            <span className="rgtr-agreement">
              By creating an account, I consent to the processing of my personal
              data in accordance with the
              <br /> <b>PRIVACY POLICY</b>
            </span>
            <button className="rgtr-button" onClick={formSubmit}>
              CREATE
            </button>
          </form>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Register;

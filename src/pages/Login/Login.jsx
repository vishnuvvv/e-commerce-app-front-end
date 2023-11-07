import React, { useState } from "react";
import "../Login/Login.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
//import { Visibility, VisibilityOff } from "@mui/icons-material";


const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  //const [isPasswordVisible, setPasswordVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, error, currentUser } = useSelector((state) => state.user);

  const handleLogin = async (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    if (currentUser.accessToken) {
      navigate("/");
    }
  };
  // const togglePasswordVisibility = () => {
  //   setPasswordVisible(!isPasswordVisible);
  // };

  return (
    <>
      <Navbar />
      <Announcement />
      <div className="register-container">
        <div className="register-wrapper">
          <h1 className="register-title">SIGN IN</h1>
          <form className="register-form">
            <input
              placeholder="user name"
              className="rgtr-input"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              placeholder="password"
              className="rgtr-input"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && (
              <span style={{ color: "red" }}>Something went wrong !</span>
            )}
            <button className="rgtr-button" onClick={handleLogin}>
              {isFetching ? "Loading.." : "LOG IN"}
            </button>
            <a href="/" className="login-links">
              Don't you rember the password?
            </a>
            <a href="/" className="login-links">
              create a new account
            </a>
          </form>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Login;

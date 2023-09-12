import React, { useState } from "react";
import "../Login/Login.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isFetching, error, currentUser } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  if(currentUser){
    navigate("/")
  }

  return (
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
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <span style={{ color: "red" }}>Something went wrong !</span>
          )}
          <button className="rgtr-button" onClick={handleLogin}>
            {isFetching ? "Loading.." : "LOG IN"}
          </button>
          <a className="login-links">Don't you rember the password?</a>
          <a className="login-links">create a new account</a>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React from 'react'
import "../Login/Login.css"

const Login = () => {
  return (
    <div className="register-container">
    <div className="register-wrapper">
      <h1 className="register-title">SIGN IN</h1>
      <form className="register-form">
        
        <input placeholder="user name" className="rgtr-input" />
        <input placeholder="password" className="rgtr-input" />
        <button className="rgtr-button">LOG IN</button>
        <a className='login-links'>Don't you rember the password?</a>
        <a className='login-links'>create a new account</a>
      </form>
    </div>
  </div>
  )
}

export default Login

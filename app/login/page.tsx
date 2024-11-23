"use client";

import React from 'react';
import './login_page.css';
import NavBar from "../navbar";

export default function Login_Page() {
  return (
    <div>
      <NavBar/>

      <div className="Login_Container">
      
      <div id="login">
        <h1>Login</h1>
        <hr/>
        <form id="loginForm">
          
          <p className="error-message" id="errorMessage">Incorrect Username or Password</p>
          
          <div className="inputbox">
            <input type="email" placeholder="Email" id="emailInput" name="email" required/>        
          </div>
          <div className="inputbox">
            <input type="password" placeholder="Password" minLength={8} id="passwordInput" name="password" required/>
          </div>
          <button type="submit" id="loginButton">Log in</button>
          
          <div className="register">
            <p>Don't have an account? <a href="entry.html"> Register</a></p>
          </div>
        </form> 
      </div>
  
    </div>
    </div>
    
  );
}

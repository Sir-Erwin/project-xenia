import React, {useState} from 'react';
import './login_page.css';


export default function Login_Page() {
  const [email,setEmail] = useState(' ');
  const [password,setPassword] = useState(' ');

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    try {
      const res = await fetch('https://xenia-backend-ebc138112a56.herokuapp.com/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([email,password]), 
      });

      const data = await res.json()
      console.log("Login successful: ", data);
  }
};



  return (
    <div className="Login_Container">
      
      <div id="login">
        <h1>Login</h1>
        <hr/>
        <form id="loginForm" onSubmit={handleSubmit}>
          <p className="error-message" id="errorMessage">Incorrect Username or Password</p>
          
          <div className="inputbox">
            <input type="email" placeholder="Email" id="emailInput" name="email" onChange={(e) => setEmail(e.target.value)} required/>        
          </div>
          <div className="inputbox">
            <input type="password" placeholder="Password" minLength={8} id="passwordInput" name="password" onChange={(e) => setPassword(e.target.value)} required/>
          </div>
          <button type="submit" id="loginButton">Log in</button>
          
          <div className="register">
            <p>Dont have an account? <a href="entry.html"> Register</a></p>
          </div>
        </form> 
      </div>
  
    </div>
  );
}

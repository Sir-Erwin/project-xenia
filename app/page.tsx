import Image from "next/image";
import './login_page.css';

export default function Home() {
  return (
    <body>
      <header>
        <nav>
          <div id="main-logo">
            
            <h1>Project Xenia</h1>

            <ul id="categories">
              <li><a href="home.html">Home</a></li>
              <li><a href="login.html">Log in</a></li>
              <li><a href="entry.html">Sign Up</a></li>
            </ul>
          </div>
        </nav>
      </header>
      
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
  
    </body>
  );
}

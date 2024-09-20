import './navbar.css'

export default function NavBar(){
    return(
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
    );
}
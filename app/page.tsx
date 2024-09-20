import Image from "next/image";
import './globals.css'
import NavBar from "./navbar";
import Login_Page from "./login_page";

export default function Home() {
  return (
    <div className="master-page">
      <NavBar/>

      <Login_Page/>
      
    </div>

  );
}

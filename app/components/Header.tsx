import logo from "../assets/logo.png";
import Script from "next/script";

export default function Header() {
  return (
    <>
      <Script
        src="https://kit.fontawesome.com/32c2532505.js"
        crossOrigin="anonymous"
        strategy="beforeInteractive"
      />
      <div>
        <img src={logo.src} alt="Logo" style={{ height: "200px" }} />
      </div>
      <div className="topnav">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#profile">Profile</a>
        <a href="#settings">Settings</a>
      </div>
      <hr className="header-hr" />
    </>
  );
}

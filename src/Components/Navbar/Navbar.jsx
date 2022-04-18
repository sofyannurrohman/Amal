import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="nav-left">
        <span className="logo">Amal</span>
      </div>
      <div className="nav-right">
        <div className="nav-list">
          <ul style={{ listStyleType: "none" }}>
            <li>Home</li>
            <li>About us</li>
            <li>Achievement</li>
            <li>Testimonial</li>
          </ul>
        </div>
        <button className="button nav-button">Contact kami</button>
      </div>
    </div>
  );
};

export default Navbar;

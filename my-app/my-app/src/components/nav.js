import React from "react";
import "./nav.css";
import logo from "../assets/logo.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import medium from "../assets/medium.png";
const nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" />
      </div>
      <div className="navbar-right">
        <ul>
          <li>
            <a href="">
              <img src={linkedin} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={facebook} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={twitter} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={medium} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default nav;

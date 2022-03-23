import React from "react";
import "./Navbar.css";

const Navbar = () => {

    const myFunction = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }

      
  return (
    <div className="topnav" id="myTopnav">
    <a href="/" className="active">Home</a>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
    <a href="javascript:void(0);" className="icon" onClick={myFunction}>
      <i className="fa fa-bars"></i>
    </a>
  </div>

  );
};

export default Navbar;

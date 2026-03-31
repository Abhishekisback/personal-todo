import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
import UserInfo from "./UserInfo.jsx";
import Cookies from "js-cookie";

function Navbar() {
  const isAuthorizedUser = Cookies.get("isUserVerified");
  console.log(isAuthorizedUser === "authorized");

  return (
    <div className="navbarWrapper">
      <div className="logosection">
        <img
          src="https://t4.ftcdn.net/jpg/06/59/37/09/360_F_659370930_7f4Iuy35H4HmkLmZKABNralmfvqTDMe2.jpg"
          alt="logo"
          width={80}
          height={80}
        />
      </div>

      <div className="navMenu">
        <NavLink to={"/"} className="navLinks">
          Home
        </NavLink>
        <NavLink to={"/about-us"} className="navLinks">
          About Us
        </NavLink>
        <NavLink to={"/contact-us"} className="navLinks">
          Contact Us
        </NavLink>

        {isAuthorizedUser === "authorized" ? (
          <></>
        ) : (
          <NavLink to={"/login"} className="navLinks">
            Login
          </NavLink>
        )}

        {isAuthorizedUser === "authorized" ? (
          <></>
        ) : (
          <NavLink to={"/signup"} className="navLinks">
            Sign Up
          </NavLink>
        )}
      </div>

      {isAuthorizedUser === "authorized" ? <UserInfo></UserInfo> : <></>}
      
    </div>
  );
}

export default Navbar;

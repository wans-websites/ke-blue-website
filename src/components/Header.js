import React, { useState } from "react";
import "./Header.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import logo from "../images/logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";

export default function Header({ isMobileView }) {
  const [isNavMenuClicked, setIsNavMenuClicked] = useState(false);
  const location = useLocation().pathname;

  return (
    <>
      <header className="header">
        <div className="header-top">
          <img className="logo" src={logo} alt="ke-blue logo" />
          {isMobileView && (
            <MenuIcon
              className="menu-icon"
              onClick={() =>
                setIsNavMenuClicked((current) => (current = !current))
              }
            />
          )}
          {/* <div className="info opening-hours">
            <AccessTimeIcon className="top-header-icon" />
            <div>
              <p>Mon - Sat 9.00 - 18.00</p>
              <p>Sunday Closed</p>
            </div>
          </div>
          <div className="info email">
            <MailOutlineIcon className="top-header-icon" />
            <div>
              <p>Email</p>
              <p>info@ke-blue.com</p>
            </div>
          </div>
          <div className="info call">
            <CallIcon className="top-header-icon" />
            <div>
              <p>Call Us</p>
              <p>+254-704-007-333</p>
              <p>+254-704-576-165</p>
            </div>
          </div> */}
        </div>
      </header>
      <nav
        className={`nav-options ${isNavMenuClicked && "mobile-nav-options"} ${
          isMobileView && "mobile-view"
        }`}
        onClick={() => setIsNavMenuClicked(false)}
      >
        <Link
          to={"/"}
          className={`nav-option link ${location === "/" && "active"}`}
        >
          Home
        </Link>
        <Link
          to={"/about"}
          className={`nav-option link ${location === "/about" && "active"}`}
        >
          About
        </Link>
        <Link
          to={"/services"}
          className={`nav-option link ${location === "/services" && "active"}`}
        >
          Our Services
        </Link>
        <Link
          to={"/products"}
          className={`nav-option link ${location === "/products" && "active"}`}
        >
          Our Products
        </Link>
        {/* <div className="social-media">
          <a
            href="https://www.google.com"
            alt=""
            target={"_blank"}
            rel="noreferrer"
          >
            <InstagramIcon className="header-icon" />
          </a>
          <a
            href="https://www.google.com"
            alt=""
            target={"_blank"}
            rel="noreferrer"
          >
            <FacebookIcon className="header-icon" />
          </a>
          <a
            href="https://www.google.com"
            alt=""
            target={"_blank"}
            rel="noreferrer"
          >
            <TwitterIcon className="header-icon" />
          </a>
          <a
            href="https://www.google.com"
            alt=""
            target={"_blank"}
            rel="noreferrer"
          >
            <LinkedInIcon className="header-icon" />
          </a>
        </div> */}
        <Link
          to={"/contacts"}
          className={`nav-option link ${location === "/contacts" && "active"}`}
        >
          Get In Touch
        </Link>
      </nav>
    </>
  );
}

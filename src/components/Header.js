import React from "react";
import "./Header.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";

export default function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <img className="logo" src="" alt="ke-blue logo" />
        <div className="opening-hours">
          <AccessTimeIcon />
          <div>
            <p>Mon - Sat 9.00 - 18.00</p>
            <p>Sunday Closed</p>
          </div>
        </div>
        <div className="email">
          <MailOutlineIcon />
          <div>
            <p>Email</p>
            <p>info@ke-blue.com</p>
          </div>
        </div>
        <div className="call">
          <CallIcon />
          <div>
            <p>Call Us</p>
            <p>+254-704-007-333</p>
            <p>+254-704-576-165</p>
          </div>
        </div>
      </div>
      <nav>
        <div>Home</div>
        <div>About</div>
        <div>Our Services</div>
        <div>Our Products</div>
        <div>Get In Touch</div>
      </nav>
    </header>
  );
}

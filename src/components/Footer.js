import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import logo from "../images/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="first">
          <img src={logo} alt="ke-blue logo" className="logo" />
          <div className="footer-text">
            Leverage agile frameworks to provide a robust synopsis for strategy
            collaborative thinking to further the overall value proposition.
          </div>
          <div className="contacts">
            <div className="circle">
              <MailOutlineIcon className="icon" />
            </div>
            <div>
              <p>Email:</p>
              <p>info@ke-blue.com</p>
            </div>
          </div>
          <div className="contacts">
            <div className="circle">
              <CallIcon className="icon" />
            </div>
            <div>
              <p>Call Us:</p>
              <p>+254-704-007-333 </p>
              <p>+254-704-576-165</p>
            </div>
          </div>
        </div>
        <div className="second">
          <h3>Pages</h3>
          <Link className="link" to={"/"}>
            Home
          </Link>
          <Link className="link" to={"/about"}>
            About
          </Link>
          <Link className="link" to={"/services"}>
            Our Services
          </Link>
          <Link className="link" to={"/products"}>
            Our Products
          </Link>
        </div>
        <div className="third">
          <h3>Subscribe</h3>
          <input
            className="subscribe-input"
            type={"email"}
            placeholder="Enter your email"
          />
          <div className="btns">
            <button>Submit</button>
            <div className="social-medias">
              <a href="" target={"_blank"} rel="noreferrer">
                <InstagramIcon className="icon" />
              </a>
              <a href="" target={"_blank"} rel="noreferrer">
                <TwitterIcon className="icon" />
              </a>
              <a href="" target={"_blank"} rel="noreferrer">
                <FacebookIcon className="icon" />
              </a>
              <a href="" target={"_blank"} rel="noreferrer">
                <TwitterIcon className="icon" />
              </a>
              <a href="" target="_blank" rel="noreferrer">
                <LinkedInIcon className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © keblue </p> |{" "}
        <p>
          Designed by
          <a
            href="https://www.wansenziroz.com"
            target={"_blank"}
            rel="noreferer"
          >
            wansenziroz.
          </a>
        </p>
      </div>
    </footer>
  );
}

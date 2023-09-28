import React from "react";
import "./Footer.css";

import logo from "../images/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <img src={logo} alt="ke-blue logo" className="logo" />
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

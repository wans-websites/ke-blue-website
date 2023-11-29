import React from "react";
import "./Hero.css";

export default function Hero() {
  const emailBody =
    "Dear Ke-blue\n\nI am <Your Full Name>, and I am interested in placing an order for <no. of bottles> bottles of <bottle size>-liter AdBlue. My current location is <building/estate>,<road>, <location>, <county>, <country>. You can reach me via phone at <include country code> or by email at <your email>.\n\nWarm regards.";
  const recipientEmail = "info@ke-blue.com";
  return (
    <div className="hero">
      <div className="container">
        <div className="section-tag">
          <h1>Eco Friendly Products</h1>
        </div>
        <h2>
          We are the largest AdBlue producers and distributors based in Kenya
        </h2>
        <p>
          AdBlue is the best Nox-gases reduction agent used with the selective
          catalytic reductive system of your diesel engine.AdBlue consists of a
          demine-ralized water and automotive urea (32.5%) and classified as a
          non~hazardous product.A cleaner Healthier World!
        </p>
        <p>
          If you are intrested in any area around adblue production and
          distribution, please get in touch below.
        </p>
        <a
          className="section-btn"
          href={`mailto:${recipientEmail}?subject=Adblue Distributor Certifcation&body=${encodeURIComponent(
            "Greetings"
          )}`}
        >
          Get in touch
        </a>
      </div>
    </div>
  );
}

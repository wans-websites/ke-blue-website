import React from "react";
import "./Whyus.css";
import MarkunreadMailboxIcon from "@mui/icons-material/MarkunreadMailbox";
import MoneyIcon from "@mui/icons-material/Money";

export default function Whyus() {
  return (
    <div className="why-us">
      <div className="image"></div>
      <div className="container">
        <div className="content">
          <div className="left">
            <div className="section-tag">
              <h1>Why us</h1>
              <h2>Your Trusted Partner in Emission Reduction</h2>
            </div>
            <p>
              At KeBlue ECO Products, our journey has been marked by a steadfast
              dedication to excellence and an unswerving commitment to building
              a sustainable future.
            </p>
            <p>
              Over the years, we have not merely earned a reputation as the
              foremost provider of AdBlue solutions in Kenya; we have forged
              lasting relationships with our valued clients based on trust,
              quality, and an unwavering passion for environmental
              responsibility.
            </p>
            <div className="advantage">
              <div className="icon-div">
                <MarkunreadMailboxIcon className="icon" />
              </div>
              <h3>Unparalleled Expertise</h3>
            </div>
            <div className="advantage">
              <div className="icon-div">
                <MoneyIcon className="icon" />
              </div>
              <h3>Environmental Responsibility</h3>
            </div>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
}

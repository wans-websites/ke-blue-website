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
              <h2>We provide full range global logistics solution</h2>
            </div>
            <p>
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition.
            </p>
            <p>
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment.
            </p>
            <div className="advantage">
              <div className="icon-div">
                <MarkunreadMailboxIcon className="icon" />
              </div>
              <h3>Delivery on Time</h3>
            </div>
            <div className="advantage">
              <div className="icon-div">
                <MoneyIcon className="icon" />
              </div>
              <h3>Optimized Travel Cost</h3>
            </div>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
}

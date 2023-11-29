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
              At KeBlue ECO Products, we proudly stand as the inaugural
              manufacturers of AdBlue in Kenya. Our commitment to excellence is
              underscored by being KEBS certified, licensed by the German VDA,
              and adhering to ISO Standards in the production of AdBlue.
            </p>
            <p>
              We have swiftly become the foremost provider of AdBlue solutions
              in the region, fostering enduring relationships with our valued
              clients. This foundation is built upon trust, a dedication to
              quality for diesel vehicles, and an unwavering passion for
              environmental responsibility
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

import React from "react";
import "./Whatwedo.css";
import SailingIcon from "@mui/icons-material/Sailing";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

export default function Whatwedo() {
  return (
    <section className="what-we-do">
      <div className="container">
        <div className="section-tag">
          <h1>What We Do</h1>
          <h2>Our Commitment to Emission Reduction</h2>
        </div>
        <div className="content">
          <div className="work">
            <SailingIcon className="work-icon" />
            <div className="description">
              <div className="title">AdBlue Production and Distribution</div>
              <div className="detail">
                We manufacture high quality Adblue in compliance with the ISO
                standards that effectively reduce NOx emissions from diesel
                engines.
              </div>
            </div>
          </div>
          <div className="work">
            <FlightTakeoffIcon className="work-icon" />
            <div className="description">
              <div className="title">Environmental Advocacy</div>
              <div className="detail">
                KeBlue actively participates in initiatives and campaigns to
                raise awareness about emissions reduction and environmental
                sustainability.
              </div>
            </div>
          </div>
          <div className="work">
            <WarehouseIcon className="work-icon" />
            <div className="description">
              <div className="title">Customized Solutions</div>
              <div className="detail">
                Whether you operate a small fleet or a large industrial
                facility, we have the expertise to provide the right solution
                for you.
              </div>
            </div>
          </div>
          <div className="work">
            <LocalShippingIcon className="work-icon" />
            <div className="description">
              <div className="title">Technical Expertise</div>
              <div className="detail">
                We offer consultation services and guidance on the proper use of
                AdBlue, ensuring that your diesel engines run efficiently and
                sustainably.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

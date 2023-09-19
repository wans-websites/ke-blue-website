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
          <h2>Safe & Reliable Cargo Solutions</h2>
        </div>
        <div className="content">
          <div className="work">
            <SailingIcon className="work-icon" />
            <div className="description">
              <div className="title">Sea Transport Services</div>
              <div className="detail">
                Following the quality of our service thus having gained trust of
                our many clients.
              </div>
            </div>
          </div>
          <div className="work">
            <FlightTakeoffIcon className="work-icon" />
            <div className="description">
              <div className="title">Air Fright Services</div>
              <div className="detail">
                Following the quality of our service thus having gained trust of
                our many clients.
              </div>
            </div>
          </div>
          <div className="work">
            <WarehouseIcon className="work-icon" />
            <div className="description">
              <div className="title">Warehousing Services</div>
              <div className="detail">
                Following the quality of our service thus having gained trust of
                our many clients.
              </div>
            </div>
          </div>
          <div className="work">
            <LocalShippingIcon className="work-icon" />
            <div className="description">
              <div className="title">Local Shipping Services</div>
              <div className="detail">
                Following the quality of our service thus having gained trust of
                our many clients.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

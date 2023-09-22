import React from "react";
import PageHero from "../../components/PageHero";
import "./Services.css";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import bgimg from "../../images/truck.jpg";

export default function Services() {
  return (
    <div className="services">
      <PageHero
        title={"What We Do"}
        subtitle={"Our Services"}
        bgImage={bgimg}
      />
      <div className="container">
        <div className="section-tag">
          <h1>What We Do</h1>
          <h2>Our Services</h2>
        </div>
        <div className="content">
          <div className="service">
            <TimeToLeaveIcon className="icon" />
            <div className="title">Duis semper lacus</div>
            <div className="description">
              Nulla tempor elit nec feugiat tempus. Phasellus at quam hendrerit
              semper feugiat id nunc. Morbi quis justo velit.
            </div>
          </div>
          <div className="service">
            <TimeToLeaveIcon className="icon" />
            <div className="title">Duis semper lacus</div>
            <div className="description">
              Nulla tempor elit nec feugiat tempus. Phasellus at quam hendrerit
              semper feugiat id nunc. Morbi quis justo velit.
            </div>
          </div>
          <div className="service">
            <TimeToLeaveIcon className="icon" />
            <div className="title">Duis semper lacus</div>
            <div className="description">
              Nulla tempor elit nec feugiat tempus. Phasellus at quam hendrerit
              semper feugiat id nunc. Morbi quis justo velit.
            </div>
          </div>
          <div className="service">
            <TimeToLeaveIcon className="icon" />
            <div className="title">Duis semper lacus</div>
            <div className="description">
              Nulla tempor elit nec feugiat tempus. Phasellus at quam hendrerit
              semper feugiat id nunc. Morbi quis justo velit.
            </div>
          </div>
          <div className="service">
            <TimeToLeaveIcon className="icon" />
            <div className="title">Duis semper lacus</div>
            <div className="description">
              Nulla tempor elit nec feugiat tempus. Phasellus at quam hendrerit
              semper feugiat id nunc. Morbi quis justo velit.
            </div>
          </div>
          <div className="service">
            <TimeToLeaveIcon className="icon" />
            <div className="title">Duis semper lacus</div>
            <div className="description">
              Nulla tempor elit nec feugiat tempus. Phasellus at quam hendrerit
              semper feugiat id nunc. Morbi quis justo velit.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <section className="about-us">
      <div className="container">
        <div className="left"></div>
        <div className="right">
          <div className="section-tag">
            <h1>About us</h1>
            <h2>Duis semper lacus scelerisque, aliquam leo quis.</h2>
          </div>
          <p>
            Nulla tempor elit nec feugiat tempus. Phasellus at quam hendrerit
            semper feugiat id nunc. Morbi quis justo velit. Nulla tempor elit
            nec feugiat tempus. Phasellus at quam hendrerit semper feugiat id
            nunc. Morbi quis justo velit.
          </p>
          <div className="section-btn">Learn More</div>
        </div>
      </div>
    </section>
  );
}

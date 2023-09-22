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
            <h2>Driving Sustainable Solutions with KeBlue ECO Products</h2>
          </div>
          <p>
            At KeBlue ECO Products, our journey epitomizes an unwavering
            dedication to environmental sustainability. As Kenya's premier
            producer and distributor of AdBlue, we've evolved into champions of
            responsible business and eco-consciousness.
          </p>
          <p>
            Our inception was driven by a vision of a world with minimized
            emissions and a thriving planet. This vision has become a reality,
            and we've emerged as leaders in emission reduction, evident in our
            state-of-the-art production facilities and extensive distribution
            network.
          </p>

          <div className="section-btn">Learn More</div>
        </div>
      </div>
    </section>
  );
}

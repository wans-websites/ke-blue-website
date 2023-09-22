import React from "react";
import "./WhyChooseUs.css";

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="image"></div>
        <div className="right">
          <div className="section-tag">
            <h1>Why Choose Us</h1>
            <h2>We create opportunity to reach potential</h2>
          </div>
          <p>
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition.
          </p>
          <div className="packages">
            <div>
              <div className="package">
                <div className="icon-circle"></div>
                <p>Safe Package</p>
              </div>
              <div className="package">
                <div className="icon-circle"></div>
                <p>Safe Package</p>
              </div>
              <div className="package">
                <div className="icon-circle"></div>
                <p>Safe Package</p>
              </div>
            </div>
            <div>
              <div className="package">
                <div className="icon-circle"></div>
                <p>Safe Package</p>
              </div>
              <div className="package">
                <div className="icon-circle"></div>
                <p>Safe Package</p>
              </div>
              <div className="package">
                <div className="icon-circle"></div>
                <p>Safe Package</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

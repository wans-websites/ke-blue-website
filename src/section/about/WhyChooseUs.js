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
            <h2>Elevating Your Commitment to Sustainability</h2>
          </div>
          <p>
            When it comes to reducing emissions and embracing eco-conscious
            solutions, there are compelling reasons to choose KeBlue ECO
            Products as your trusted partner:
          </p>
          <div className="packages">
            <div>
              <div className="package">
                <div className="icon-circle"></div>
                <p>Proven Excellence</p>
              </div>
              <div className="package">
                <div className="icon-circle"></div>
                <p>Expertise</p>
              </div>
              <div className="package">
                <div className="icon-circle"></div>
                <p>Customized Solutions</p>
              </div>
            </div>
            <div>
              <div className="package">
                <div className="icon-circle"></div>
                <p>Environmental Responsibility</p>
              </div>
              <div className="package">
                <div className="icon-circle"></div>
                <p>Innovation</p>
              </div>
              <div className="package">
                <div className="icon-circle"></div>
                <p>Comprehensive Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import "./Partners.css";

export default function Partners() {
  return (
    <section className="partners">
      <div className="container">
        <div className="image"></div>
        <div className="right">
          <div className="section-tag">
            <h1>Our Trusted Partners</h1>
            <h2>Collaborating for a Sustainable Future</h2>
          </div>
          <p>
            At KeBlue ECO Products, we believe that meaningful partnerships are
            the cornerstone of progress. We are proud to collaborate with a
            diverse network of trusted partners who share our vision of a
            cleaner, greener future. These alliances are at the heart of our
            commitment to environmental sustainability and emission reduction.
          </p>
          <div className="packages">
            <div>
              <div className="package">
                <div className="icon-circle"></div>
                <p>Diverse Industry Collaborations</p>
              </div>
              <div className="package">
                <div className="icon-circle"></div>
                <p>Shared Environmental Vision</p>
              </div>
              <div className="package">
                <div className="icon-circle"></div>
                <p>Innovation and Progress</p>
              </div>
            </div>
            <div>
              <div className="package">
                <div className="icon-circle"></div>
                <p>Responsibility and Accountability</p>
              </div>
              <div className="package">
                <div className="icon-circle"></div>
                <p>Mutual Growth</p>
              </div>
              <div className="package">
                <div className="icon-circle"></div>
                <p>Long-Term Commitment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

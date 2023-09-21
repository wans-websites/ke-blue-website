import React from "react";
import "./Testimonial.css";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import StarIcon from "@mui/icons-material/Star";

export default function Testimonial() {
  return (
    <div className="testimonial">
      <div className="container">
        <div className="section-tag">
          <h1>Testimonial</h1>
          <h2>What our customer say</h2>
        </div>
        <div className="content">
          <div className="testimonial-1">
            <div className="container">
              <div className="testimonial-header">
                <div className="profile">
                  <div className="profile-image"></div>
                  <div className="profile-detail">
                    <h3 className="name">Kathleen Smith</h3>
                    <p className="company">Fuel Company</p>
                  </div>
                </div>
                <div className="speech-icon">
                  <FormatQuoteIcon />
                </div>
              </div>
              <div className="speech">
                <p>
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster collaborative thinking to further the overall
                  value proposition. Organically grow the holistic world view of
                  disruptive innovation via workplace diversity and empowerment.
                </p>
              </div>
              <div className="stars">
                {Array.from({ length: 5 }, (_, index) => (
                  <StarIcon key={index} className="star" />
                ))}
              </div>
            </div>
          </div>
          <div className="testimonial-1">
            <div className="container">
              <div className="testimonial-header">
                <div className="profile">
                  <div className="profile-image"></div>
                  <div className="profile-detail">
                    <h3 className="name">Kathleen Smith</h3>
                    <p className="company">Fuel Company</p>
                  </div>
                </div>
                <div className="speech-icon">
                  <FormatQuoteIcon />
                </div>
              </div>
              <div className="speech">
                <p>
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster collaborative thinking to further the overall
                  value proposition. Organically grow the holistic world view of
                  disruptive innovation via workplace diversity and empowerment.
                </p>
              </div>
              <div className="stars">
                {Array.from({ length: 5 }, (_, index) => (
                  <StarIcon key={index} className="star" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

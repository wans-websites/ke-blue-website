import React from "react";
import "./HomeProduct.css";

export default function HomeProduct() {
  const emailBody =
    "Dear Ke-blue\n\nI am <Your Full Name>, and I am interested in placing an order for <no. of bottles> bottles of <bottle size>-liter AdBlue. My current location is <building/estate>,<road>, <location>, <county>, <country>. You can reach me via phone at <include country code> or by email at <your email>.\n\nWarm regards.";
  const recipientEmail = "info@ke-blue.com";

  return (
    <section className="home-product">
      <div className="products">
        <div className="product">
          <div className="product-detail">
            <h3>Ke-blue</h3>
            <h4>1 litre Ad blue ...</h4>
          </div>
        </div>
        <div className="product">
          <div className="product-detail">
            <h3>Ke-blue</h3>
            <h4>2 litres Ad blue ...</h4>
          </div>
        </div>
      </div>
      <a
        href={`mailto:${recipientEmail}?subject=Order Request&body=${encodeURIComponent(
          emailBody
        )}`}
        className="section-btn"
      >
        Order Now
      </a>
    </section>
  );
}

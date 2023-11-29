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
            <h4>10 litre Ad blue ...</h4>
          </div>
        </div>
        <div className="product">
          <div className="product-detail">
            <h3>Ke-blue</h3>
            <h4>20 litres Ad blue ...</h4>
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
      {/* <p style={{ color: "white", marginBottom: "-2vh" }}>
        Looking to be a certified distributor of Adblue Get in touch with us.
      </p>
      <a
        href={`mailto:${recipientEmail}?subject=Adblue Distributor Certifcation&body=${encodeURIComponent(
          "Greetings"
        )}`}
        className="section-btn"
        style={{ height: 20, fontSize: 11, width: 80 }}
      >
        Get in touch
      </a> */}
    </section>
  );
}

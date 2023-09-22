import React from "react";
import "./PageHero.css";

export default function PageHero({ bgImage, title, subtitle }) {
  return (
    <section
      className="page-hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="section-tag">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    </section>
  );
}

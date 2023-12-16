import React from "react";
import "./WhatIsAdblue.css";


export default function WhatIsAdblue() {
  return (
    <section className="what-is-adblue">
      <div className="container">
        <div className="section-tag">
          <h1>What Is Adblue</h1>
          <h2>AdBlue is a solution made from urea and deionized water</h2>
        </div>
        <div className="content">
          Adblue is used in diesel engines equipped with Selective Catalytic
          Reduction (SCR) technology to reduce harmful nitrogen oxide (NOx)
          emissions. When injected into the exhaust system, AdBlue reacts with
          the NOx gases and converts them into harmless nitrogen and water
          vapor.
        </div>
      </div>
    </section>
  );
}

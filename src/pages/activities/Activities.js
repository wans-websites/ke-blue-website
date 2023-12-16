import React from "react";
import PageHero from "../../components/PageHero";
import "./Activities.css";
import bgimage from "../../images/img1.jpeg";
import Activity from "../../section/activities/Activity";
import Partners from "../../section/activities/Partners";

export default function Activities() {
  return (
    <div className="activities">
      <PageHero bgImage={bgimage} title="KeBlue Activities" subtitle={"Activities"} />
      <Activity />
      <Partners />
    </div>
  );
}

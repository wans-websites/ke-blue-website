import React from "react";
import PageHero from "../../components/PageHero";
import "./About.css";
import bgimage from "../../images/truck.jpg";
import AboutUs from "../../section/about/AboutUs";
import WhyChooseUs from "../../section/about/WhyChooseUs";

export default function About() {
  return (
    <div className="about">
      <PageHero bgImage={bgimage} title="About us" subtitle={"About KeBlue"} />
      <AboutUs />
      <WhyChooseUs />
    </div>
  );
}

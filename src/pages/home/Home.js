import React from "react";
import Hero from "../../section/home/Hero";
import Testimonial from "../../section/home/Testimonial";
import Whatwedo from "../../section/home/Whatwedo";
import Whyus from "../../section/home/Whyus";
import "./Home.css";
import FAQ from "../../section/home/FAQ";
import WhatIsAdblue from "../../section/home/WhatIsAdblue";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <WhatIsAdblue />
      <Whatwedo />
      <Whyus />
      {/* <Testimonial /> */}
      <FAQ />
    </div>
  );
}

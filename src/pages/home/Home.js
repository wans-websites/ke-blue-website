import React from "react";
import Hero from "../../section/home/Hero";
import HomeProduct from "../../section/home/HomeProduct";
import Testimonial from "../../section/home/Testimonial";
import Whatwedo from "../../section/home/Whatwedo";
import Whyus from "../../section/home/Whyus";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <Whatwedo />
      <Whyus />
      <Testimonial />
    </div>
  );
}

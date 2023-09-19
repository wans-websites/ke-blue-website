import React from "react";
import Hero from "../../section/home/Hero";
import Whatwedo from "../../section/home/Whatwedo";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <Whatwedo />
    </div>
  );
}

import React from "react";
import PageHero from "../../components/PageHero";
import "./Products.css";
import HomeProduct from "../../section/products/HomeProduct";
import bgimage from "../../images/producthero.jpeg";

export default function Products() {
  return (
    <div className="products">
      <PageHero title={"KeBlue Products"} subtitle={"Ke-Blue"} bgImage={bgimage} />
      <HomeProduct />
    </div>
  );
}

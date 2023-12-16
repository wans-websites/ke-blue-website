import React from "react";
import "./Hero.css";
import heroGif from '../../images/hero.gif'

export default function Hero() {
  const recipientEmail = "info@ke-blue.com";
  return (
    <>
   <div class="main-banner" id="top">
   {/* <video autoPlay muted loop id="bg-video">
  <source src={heroVid} type="video/quicktime" />
  Your browser does not support the video tag.
</video> */}

<img src={heroGif} alt="Adblue" id="bg-video"/>

</div>


    <div className="hero">
   
   <div className="container">
     <div className="section-tag">
       <h1>Adblue In Kenya</h1>
     </div>
     <h2>
       We are the largest AdBlue producers and distributors based in Kenya.
     </h2>
     <p>
       AdBlue is the best Nox-gases reduction agent used with the selective
       catalytic reductive system of your diesel engine.AdBlue consists of a
       demine-ralized water and automotive urea (32.5%) and classified as a
       non~hazardous product.A cleaner Healthier World!
     </p>
     <p>
       If you are intrested in any area around adblue production and
       distribution, please get in touch below.
     </p>
     <a
       className="section-btn"
       href={`mailto:${recipientEmail}?subject=Adblue Distributor Certifcation&body=${encodeURIComponent(
         "Greetings"
       )}`}
       
     >
       Get in touch
     </a>
   </div>
 </div>
    
    </>

  );
}

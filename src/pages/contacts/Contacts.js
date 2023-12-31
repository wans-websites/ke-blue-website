import React from "react";
import "./Contacts.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PageHero from "../../components/PageHero";
import bgimg from "../../images/truck.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Contacts() {
  const recipientEmail = "info@ke-blue.com";

  return (
    <>
      <PageHero
        title={"Contact us"}
        subtitle="Get In Touch With Us"
        bgImage={bgimg}
      />
      <div className="page-contacts">
        <div className="container">
          <div className="content">
            <div className="left">
              <div className="section-tag">
                <h1>Contact</h1>
                <h2>Get In Touch With Us</h2>
              </div>
              <p>
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value.
              </p>
              <div className="contact">
                <div className="circle">
                  <MailOutlineIcon className="icon" />
                </div>
                <div>
                  <p>Email:</p>
                  <p>info@keblue-ecoproducts.com</p>
                </div>
              </div>
              <div className="contact">
                <div className="circle">
                  <MailOutlineIcon className="icon" />
                </div>
                <div>
                  <p>Phone:</p>
                  <p>+254-704-007-333</p>
                  <p>+254-704-576-165</p>
                </div>
              </div>
              <div className="contact">
                <div className="social-medias">
                  <p>Social Medias:</p>
                  <a href="https://www.linkedin.com/company/keblue-eco-products">
                    <InstagramIcon />
                  </a>
                  <a href="https://www.instagram.com/keblue_ecoproducts/">
                    <TwitterIcon />
                  </a>
                  <a href="https://twitter.com/KeBlueEco">
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
            </div>
            <div className="right">
              <a href={`mailto:${recipientEmail}`} className="section-btn">
                Email Us
              </a>
            </div>
          </div>
          <div className="contact-footer">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

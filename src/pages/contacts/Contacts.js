import React from "react";
import "./Contacts.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PageHero from "../../components/PageHero";
import bgimg from "../../images/truck.jpg";

export default function Contacts() {
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
                  <p>info@ke-blue.com</p>
                </div>
              </div>
              <div className="contact">
                <div className="circle">
                  <MailOutlineIcon className="icon" />
                </div>
                <div>
                  <p>Email:</p>
                  <p>info@ke-blue.com</p>
                </div>
              </div>
              <div className="contact">
                <div className="circle">
                  <MailOutlineIcon className="icon" />
                </div>
                <div>
                  <p>Email:</p>
                  <p>info@ke-blue.com</p>
                </div>
              </div>
            </div>
            <div className="right">
              <form>
                <div>
                  <input placeholder="Your Name" />
                  <input placeholder="Email" />
                </div>
                <div>
                  <input placeholder="Phone Number" />
                  <input placeholder="City" />
                </div>
                <textarea placeholder="Your Message" />
                <input
                  type={"submit"}
                  value="Submit Message"
                  className="section-btn"
                />
              </form>
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

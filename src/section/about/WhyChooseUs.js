import React from "react";
import "./WhyChooseUs.css";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import EditIcon from "@mui/icons-material/Edit";
import ForestIcon from "@mui/icons-material/Forest";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="image"></div>
        <div className="right">
          <div className="section-tag">
            <h1>Why Choose KeBlue</h1>
            <h2>Elevating Your Commitment to Sustainability.</h2>
          </div>
          <p>
            When it comes to reducing emissions and embracing eco-conscious
            solutions, there are compelling reasons to choose KeBlue ECO
            Products as your trusted partner:
          </p>
          <div className="packages">
            <div>
              <div className="package">
                <div className="icon-circle">
                  <ThumbUpOffAltIcon className="icon" />
                </div>
                <p>Proven Excellence</p>
              </div>
              <div className="package">
                <div className="icon-circle">
                  <CloudDoneIcon className="icon" />
                </div>
                <p>Expertise</p>
              </div>
              <div className="package">
                <div className="icon-circle">
                  <EditIcon className="icon" />
                </div>
                <p>Customized Solutions</p>
              </div>
            </div>
            <div>
              <div className="package">
                <div className="icon-circle">
                  <ForestIcon className="icon" />
                </div>
                <p>Environmental Responsibility</p>
              </div>
              <div className="package">
                <div className="icon-circle">
                  <DesignServicesIcon className="icon" />
                </div>
                <p>Innovation</p>
              </div>
              <div className="package">
                <div className="icon-circle">
                  <ContactSupportIcon className="icon" />
                </div>
                <p>Comprehensive Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

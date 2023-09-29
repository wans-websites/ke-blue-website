import React from "react";
import PageHero from "../../components/PageHero";
import "./Services.css";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import bgimg from "../../images/serviceshero.jpeg";

export default function Services() {
  return (
    <div className="services">
      <PageHero
        title={"What We Do"}
        subtitle={"Our Services"}
        bgImage={bgimg}
      />
      <div className="container">
        <div className="section-tag">
          <h1>What We Do</h1>
          <h2>Our Services</h2>
        </div>
        <div className="content">
          <div className="service">
            <TimeToLeaveIcon className="icon" />
            <div className="title">AdBlue Production and Distribution</div>
            <div className="description">
              We are the leading producer and distributor of AdBlue in Kenya,
              ensuring a consistent supply of high-quality emission-reduction
              solutions to meet your needs.
            </div>
          </div>
          <div className="service">
            <TimeToLeaveIcon className="icon" />
            <div className="title">Customized Solutions</div>
            <div className="description">
              Our services go beyond a one-size-fits-all approach. We offer
              tailored AdBlue solutions to match the specific requirements of
              your diesel engines, whether for a small fleet or a large
              industrial facility.
            </div>
          </div>
          <div className="service">
            <TimeToLeaveIcon className="icon" />
            <div className="title">Technical Expertise</div>
            <div className="description">
              Benefit from our team of experts who possess in-depth knowledge of
              emission reduction technologies. We provide expert guidance to
              optimize your selective catalytic reduction systems for maximum
              efficiency.
            </div>
          </div>
          <div className="service">
            <TimeToLeaveIcon className="icon" />
            <div className="title">Environmental Advocacy</div>
            <div className="description">
              As environmental stewards, we actively participate in initiatives
              and campaigns aimed at raising awareness about emissions reduction
              and promoting eco-friendly practices.
            </div>
          </div>
          <div className="service">
            <TimeToLeaveIcon className="icon" />
            <div className="title">Innovation and Research</div>
            <div className="description">
              We invest in continuous research and innovation to stay at the
              forefront of emission reduction technologies, ensuring our
              products and processes are environmentally friendly and efficient.
            </div>
          </div>
          <div className="service">
            <TimeToLeaveIcon className="icon" />
            <div className="title">Comprehensive Support</div>
            <div className="description">
              Our commitment to your satisfaction includes comprehensive
              customer support. From product inquiries to technical assistance,
              we are here to assist you every step of the way, ensuring a
              seamless experience with KeBlue ECO Products.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

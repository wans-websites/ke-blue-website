import React from "react";
import "./Partners.css";
import FactoryIcon from "@mui/icons-material/Factory";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import OnDeviceTrainingIcon from "@mui/icons-material/OnDeviceTraining";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ExpandIcon from "@mui/icons-material/Expand";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

export default function Partners() {
  return (
    <section className="partners">
      <div className="container">
        <div className="image"></div>
        <div className="right">
          <div className="section-tag">
            <h1>Our Trusted Partners</h1>
            <h2>Collaborating for a Sustainable Future</h2>
          </div>
          <p>
            At KeBlue ECO Products, we believe that meaningful partnerships are
            the cornerstone of progress. We are proud to collaborate with a
            diverse network of trusted partners who share our vision of a
            cleaner, greener future. These alliances are at the heart of our
            commitment to environmental sustainability and emission reduction.
          </p>
          <div className="packages">
            <div>
              <div className="package">
                <div className="icon-circle">
                  <FactoryIcon className="icon" />
                </div>
                <p>Diverse Industry Collaborations</p>
              </div>
              <div className="package">
                <div className="icon-circle">
                  <RemoveRedEyeIcon className="icon" />
                </div>
                <p>Shared Environmental Vision</p>
              </div>
              <div className="package">
                <div className="icon-circle">
                  <OnDeviceTrainingIcon className="icon" />
                </div>
                <p>Innovation and Progress</p>
              </div>
            </div>
            <div>
              <div className="package">
                <div className="icon-circle">
                  <AccountBalanceIcon className="icon" />
                </div>
                <p>Responsibility and Accountability</p>
              </div>
              <div className="package">
                <div className="icon-circle">
                  <ExpandIcon className="icon" />
                </div>
                <p>Mutual Growth</p>
              </div>
              <div className="package">
                <div className="icon-circle">
                  <ReceiptLongIcon className="icon" />
                </div>
                <p>Long-Term Commitment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

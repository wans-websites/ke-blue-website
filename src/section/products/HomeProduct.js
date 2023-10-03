import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import the emailjs library
import "./HomeProduct.css";

export default function HomeProduct() {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [quantity, setQuantity] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { quantity, name, contact, address };

    // Configure your emailjs service and template IDs
    const serviceID = "service_trqami1"; // Replace with your EmailJS service ID
    const templateID = "template_o39nr3s"; // Replace with your EmailJS template ID

    try {
      await emailjs.send(serviceID, templateID, formData);
      console.log("Email sent successfully!");

      // Clear form fields and hide the form
      setQuantity("");
      setName("");
      setContact("");
      setAddress("");
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setShowOrderForm(false);
    }
  };

  return (
    <section className="home-product">
      <div className="product">
        <div className="product-detail">
          <h3>Ke-blue</h3>
          <h4>Ad blue ...</h4>
        </div>
      </div>
      <div className="section-btn" onClick={() => setShowOrderForm(true)}>
        Order Now
      </div>

      {showOrderForm && (
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
            <div>
              <input placeholder="Quantity" />
              <input placeholder="Size" />
            </div>
            <input
              type={"submit"}
              value="Submit Message"
              className="section-btn"
            />
          </form>
        </div>
      )}
    </section>
  );
}

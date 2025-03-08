import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-description">
          Have any questions? Feel free to reach out to us!
        </p>

        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" className="contact-input" placeholder="Your Name" required />
          <input type="email" className="contact-input" placeholder="Your Email" required />
          <textarea className="contact-textarea" placeholder="Your Message" required></textarea>
          <button type="submit" className="contact-button">Send Message</button>
        </form>

        {/* Contact Information */}
        <div className="contact-info">
          <h3>Our Contact Details</h3>
          <p>Email: support@cosmeticsapp.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Beauty Lane, Glam City</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

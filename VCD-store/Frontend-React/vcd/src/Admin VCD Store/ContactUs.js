import React from "react";

function ContactUs() {
  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>
      <p>
        If you need assistance or have any questions, feel free to reach out to
        us. We're here to help!
      </p>

      <section id="contact-info">
        <h4>Contact Information</h4>
        <p>
          <strong>Email:</strong> support@yourvcdsystem.com
          <br />
          <strong>Phone:</strong> +1-800-123-4567
          <br />
          <strong>Address:</strong> 1234 VCD Street, Cityville, CA, USA
        </p>
      </section>

      <section id="support-hours">
        <h4>Support Hours</h4>
        <p>Our support team is available during the following hours:</p>
        <p>
          Monday - Friday: 9:00 AM - 6:00 PM
          <br />
          Saturday: 10:00 AM - 4:00 PM
          <br />
          Sunday: Closed
        </p>
      </section>

      <section id="contact-form">
        <h4>Contact Form</h4>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" rows="5"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default ContactUs;

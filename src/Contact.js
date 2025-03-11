import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <div className="info-container">
        <div className="contact-item">
          <span className="contact-label">Location:</span>
          <span className="contact-value">Bentonville, AR</span>
        </div>

        <div className="contact-item">
          <span className="contact-label">Email:</span>
          <a href="mailto:phillip.c.trainor@gmail.com" className="contact-link">
            phillip.c.trainor@gmail.com
          </a>
        </div>

        <div className="contact-item">
          <span className="contact-label">LinkedIn:</span>
          <a
            href="https://www.linkedin.com/in/trainorp"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            linkedin.com/in/trainorp
          </a>
        </div>

        <div className="contact-item">
          <span className="contact-label">GitHub:</span>
          <a
            href="https://github.com/pctrainor"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            github.com/pctrainor
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-section">
      <h2>About Me</h2>
      <p>
        Proven technical leader with 10+ years in the US Navy, including 800+
        hours as an MH-60S/MQ-8B Aircraft and Mission Commander. Expertise in
        complex project management, team leadership, and advanced aviation
        systems. Strong technical skills in Java, JavaScript, Python, SQL, and
        data visualization (Excel, Tableau, Power BI). Seeking a technology role
        leveraging leadership and data-driven expertise.
      </p>
      <div className="button-container">
        <a
          href="https://www.linkedin.com/in/trainorp"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-link"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/pctrainor"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-link"
        >
          GitHub
        </a>
        <a href="mailto:phillip.c.trainor@gmail.com" className="profile-link">
          Email Me
        </a>
      </div>
    </section>
  );
}

export default About;

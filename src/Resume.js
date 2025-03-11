import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <section className="resume-section">
      <h2>Resume</h2>

      <div className="resume-actions">
        <a
          href="https://pctrainor.github.io/my_personal_site/#resume-call-to-action"
          className="view-resume-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </a>
      </div>

      <div className="resume-highlights">
        <div className="highlight-item">
          <h3>Education</h3>
          <p>
            Master of Information Systems - University of Arkansas (Expected
            2025)
          </p>
          <p>
            Bachelor of Science, Information Technology - United States Naval
            Academy (2014)
          </p>
        </div>

        <div className="highlight-item">
          <h3>Experience</h3>
          <p>10+ years of US Navy service in leadership roles</p>
          <p>Project Management Professional (PMP) certification</p>
        </div>
      </div>
    </section>
  );
}

export default Resume;

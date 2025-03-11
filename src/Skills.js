import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill-category">
          <h3>Technical Skills</h3>
          <ul>
            <li>Java</li>
            <li>JavaScript/React</li>
            <li>Python</li>
            <li>SQL</li>
            <li>HTML/CSS</li>
            <li>Git</li>
            <li>RESTful APIs</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Data Analysis</h3>
          <ul>
            <li>Excel (Advanced)</li>
            <li>Tableau</li>
            <li>Power BI</li>
            <li>Data Modeling</li>
            <li>ETL</li>
            <li>Data Warehousing</li>
            <li>Sentiment Analysis</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Project Management</h3>
          <ul>
            <li>
              <b>
                <a
                  href="https://www.pmi.org/certifications/certification-resources/registry?certificationId=3994229&firstName=Phillip&lastName=Trainor#search-info"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PMP Certified
                </a>
              </b>
            </li>
            <li>Agile/Scrum</li>
            <li>Waterfall</li>
            <li>Strategic Planning</li>
            <li>Risk Management</li>
            <li>Budget Management</li>
            <li>Process Improvement</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Leadership</h3>
          <ul>
            <li>Team Leadership</li>
            <li>Mentoring</li>
            <li>Cross-Functional Collaboration</li>
            <li>Stakeholder Management</li>
            <li>Presentation Skills</li>
            <li>Technical Documentation</li>
            <li>Conflict Resolution</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;

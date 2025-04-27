import React from "react";
import "./Projects.css";

// Define a reusable ProjectCard component (Optional but recommended for larger lists)
// Or just standardize the JSX structure directly as shown below

function Projects() {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {/* Project 1: YouTube Sentiment Analyzer */}
        <div className="project-card">
          <h3>YouTube Sentiment Analyzer - Azure Container App</h3>
          <p>
            Experience the power of sentiment analysis for YouTube creators! This containerized web application deployed on Azure allows content creators and viewers to analyze the sentiment of comments on any YouTube video, providing valuable insights into audience reception.
          </p>
          <p><b>Tech Stack: </b></p>
          <ul>
            <li><b>Backend: </b> Python, Flask</li>
            <li><b>Templating: </b> Jinja2</li>
            <li><b>Database: </b> SQLite (for efficient result caching)</li>
            <li><b>Containerization: </b> Docker</li>
            <li><b>Cloud Deployment: </b> Azure Container Apps</li>
            <li><b>API: </b> YouTube Data API</li>
          </ul>
          <p>
            This project demonstrates containerized application deployment in the cloud, showcasing both frontend and backend development skills along with DevOps principles for continuous delivery.
          </p>
          <div className="project-links">
            <a href="https://cloud-project-c5hfy-ca.bravesea-b8590de1.eastus2.azurecontainerapps.io" target="_blank" rel="noopener noreferrer">
              Try It Live
            </a>
          </div>
        </div>

        {/* Project 2: Dimension Modeler */}
        <div className="project-card">
          <h3>Dimension Modeler: Data Warehouse Tool</h3>
          <p>
            A React-based visual modeling tool that enables users to design data warehouse schemas through an intuitive drag-and-drop interface.
          </p>
          <p><b>Tech Stack: </b></p>
          <ul>
            <li><b>Frontend: </b> React 18, React Konva, CSS3</li>
            <li><b>State: </b> Zustand for global state</li>
            <li><b>UI: </b> Custom modals, drag-and-drop objects</li>
            <li><b>UX: </b> Theme switching, responsive design</li>
          </ul>
          <div className="project-links">
            <a href="https://www.youtube.com/watch?v=LFPVCbNzpxA" target="_blank" rel="noopener noreferrer">
              View Video
            </a>
          </div>
        </div>

        {/* Project 3: AI Website Generator */}
        <div className="project-card">
          <h3>AI Website Generator with Python</h3>
          <p>
            An AI-powered application that automatically generates website code using Python and large language models. Future plans include multi-threaded AI agents for HTML generation.
          </p>
          <p><b>Tech Stack: </b></p>
          <ul>
            <li><b>Backend: </b> Python, Flask, asyncio, sqlite3</li>
            <li><b>AI: </b> Ollama, OpenAI API for validation</li>
            <li><b>Frontend: </b> Gradio, HTML5, CSS3, Bootstrap 5</li>
            <li><b>Utils: </b> BeautifulSoup, html5lib, threading</li>
          </ul>
          <div className="project-links">
            <a href="https://www.youtube.com/watch?v=WhZLj-ORNwU" target="_blank" rel="noopener noreferrer">
              View Video
            </a>
          </div>
        </div>

        {/* Project 4: Generative AI HTML Website Generator */}
        <div className="project-card">
          <h3>Generative AI HTML Website Generator</h3>
          <p>
            A tool that leverages AI models to create HTML website code based on user requirements, storing HTML elements in a database while iterating through website refinement.
          </p>
          <p><b>Tech Stack: </b></p>
          <ul>
            <li><b>Backend: </b> Python, asyncio, Gradio</li>
            <li><b>AI Models: </b> Ollama, OpenAI</li>
            <li><b>Frontend: </b> Gradio Interface, HTML5, CSS3</li>
            <li><b>Utils: </b> BeautifulSoup, html5lib</li>
          </ul>
          <div className="project-links">
            <a href="https://www.youtube.com/watch?v=E7zuMOavAeU" target="_blank" rel="noopener noreferrer">
              View Video
            </a>
          </div>
        </div>

        {/* Project 5: Document Q&A System (RAG) */}
        <div className="project-card">
          <h3>Document Q&A System (RAG)</h3>
          <p>
            A retrieval-augmented generation system that enables users to query and get answers from PDF and Excel documents using LLMs.
          </p>
          <p><b>Tech Stack: </b></p>
          <ul>
            <li><b>Backend: </b> Python, LangChain, FAISS</li>
            <li><b>LLM: </b> Ollama, Deepseek-r1:1.5b</li>
            <li><b>Frontend: </b> Streamlit</li>
          </ul>
          <div className="project-links">
            <a href="https://www.youtube.com/watch?v=LacAAe-2VUI" target="_blank" rel="noopener noreferrer">
              View Video
            </a>
          </div>
        </div>

        {/* Project 6: Offline AI Chatbot */}
        <div className="project-card">
          <h3>Offline AI Chatbot</h3>
          <p>
            An offline AI chatbot application that runs locally using Ollama and Deepseek language models, eliminating the need for internet connectivity.
          </p>
          <p><b>Tech Stack: </b></p>
          <ul>
            <li><b>Backend: </b> Python, Flask</li>
            <li><b>LLM: </b> Ollama, Deepseek-r1:1.5b</li>
            <li><b>Frontend: </b> HTML, CSS, JavaScript</li>
          </ul>
          <div className="project-links">
            <a href="https://www.youtube.com/watch?v=ZOvDFR6lM1I" target="_blank" rel="noopener noreferrer">
              View Video
            </a>
          </div>
        </div>

        {/* Project 7: YouTube Comments Analyzer v2.0 */}
        <div className="project-card">
          <h3>YouTube Comments Analyzer v2.0</h3>
          <p>
            A tool that analyzes YouTube video comments using AI to provide insights and visualizations.
          </p>
          <p><b>Tech Stack: </b></p>
          <ul>
            <li><b>Backend: </b> Python, Flask</li>
            <li><b>API: </b> YouTube Data, OpenAI (gpt-4o-mini)</li>
            <li><b>DB: </b> SQLite</li>
            <li><b>Viz: </b> WordCloud</li>
            <li><b>Frontend: </b> HTML, CSS, JS</li>
          </ul>
          <div className="project-links">
            <a href="https://www.youtube.com/watch?v=KIv2B9pNTVU" target="_blank" rel="noopener noreferrer">
              View Video
            </a>
          </div>
        </div>

        {/* Add other projects here following the same standardized structure */}

      </div>
    </section>
  );
}

export default Projects;
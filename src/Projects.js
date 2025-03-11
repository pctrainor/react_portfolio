import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Dimension Modeler: Data Warehouse Tool</h3>
          <p>
            A React-based visual modeling tool that enables users to design data
            warehouse schemas through an intuitive drag-and-drop interface.
          </p>
          <p className="tech-stack-label">Tech Stack:</p>
          <ul>
            <li>Frontend: React 18, React Konva, CSS3</li>
            <li>State: Zustand for global state</li>
            <li>UI: Custom modals, drag-and-drop objects</li>
            <li>UX: Theme switching, responsive design</li>
          </ul>
          <div className="project-links">
            <a
              href="https://www.youtube.com/watch?v=LFPVCbNzpxA"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Video
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>AI Website Generator with Python</h3>
          <p>
            An AI-powered application that automatically generates website code
            using Python and large language models.
          </p>
          <p className="tech-stack-label">Tech Stack:</p>
          <ul>
            <li>Backend: Python, Flask, asyncio, sqlite3</li>
            <li>AI: Ollama, OpenAI API for validation</li>
            <li>Frontend: Gradio, HTML5, CSS3, Bootstrap 5</li>
            <li>Utils: BeautifulSoup, html5lib, threading</li>
          </ul>
          <p>Future: Multi-threaded AI agents for HTML generation.</p>
          <div className="project-links">
            <a
              href="https://www.youtube.com/watch?v=WhZLj-ORNwU"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Video
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>Generative AI HTML Website Generator</h3>
          <p>
            A tool that leverages AI models to create HTML website code based on
            user requirements, storing html elements in a database while
            iterating through website refinement.
          </p>
          <p className="tech-stack-label">Tech Stack:</p>
          <ul>
            <li>Backend: Python, asyncio, Gradio</li>
            <li>AI Models: Ollama, OpenAI</li>
            <li>Frontend: Gradio Interface, HTML5, CSS3</li>
            <li>Utils: BeautifulSoup, html5lib</li>
          </ul>
          <div className="project-links">
            <a
              href="https://www.youtube.com/watch?v=E7zuMOavAeU"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Video
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>Document Q&A System (RAG)</h3>
          <p>
            A retrieval-augmented generation system that enables users to query
            and get answers from PDF and Excel documents using LLMs.
          </p>
          <p className="tech-stack-label">Tech Stack:</p>
          <ul>
            <li>Backend: Python, LangChain, FAISS</li>
            <li>LLM: Ollama, Deepseek-r1:1.5b</li>
            <li>Frontend: Streamlit</li>
          </ul>
          <div className="project-links">
            <a
              href="https://www.youtube.com/watch?v=LacAAe-2VUI"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Video
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>Offline AI Chatbot</h3>
          <p>
            An offline AI chatbot application that runs locally using Ollama and
            Deepseek language models, eliminating the need for internet
            connectivity.
          </p>
          <p className="tech-stack-label">Tech Stack:</p>
          <ul>
            <li>Backend: Python, Flask</li>
            <li>LLM: Ollama, Deepseek-r1:1.5b</li>
            <li>Frontend: HTML, CSS, JavaScript</li>
          </ul>
          <div className="project-links">
            <a
              href="https://www.youtube.com/watch?v=ZOvDFR6lM1I"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Video
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>YouTube Comments Analyzer v2.0</h3>
          <p>
            A tool that analyzes YouTube video comments using AI to provide
            insights and visualizations.
          </p>
          <p className="tech-stack-label">Tech Stack:</p>
          <ul>
            <li>Backend: Python, Flask</li>
            <li>API: YouTube Data, OpenAI (gpt-4o-mini)</li>
            <li>DB: SQLite</li>
            <li>Viz: WordCloud</li>
            <li>Frontend: HTML, CSS, JS</li>
          </ul>
          <div className="project-links">
            <a
              href="https://www.youtube.com/watch?v=KIv2B9pNTVU"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Video
            </a>
          </div>
        </div>

        {/* Keep the remaining projects with similar optimizations */}
      </div>
    </section>
  );
}

export default Projects;

import React from "react";
import qrCode from "./qrcode_pctrainor.github.io.png";
import "./App.css";

// Import components
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Resume from "./Resume";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Phillip C. Trainor</h1>
        <p>PMP | Naval Aviator | Veteran | Leader</p>
      </header>

      <main className="App-main">
        <About />
        <Skills />
        <Resume />
        <Projects />

        <section className="portfolio-section">
          <h2>Full Portfolio</h2>
          <div className="qr-container">
            <a
              href="https://pctrainor.github.io/my_personal_site/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={qrCode}
                className="static-qr-code"
                alt="QR Code to portfolio"
                title="Click for full portfolio"
              />
            </a>
            <figcaption>
              Click/Scan the QR code above to visit my full portfolio!
            </figcaption>
          </div>
        </section>

        <Contact />
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import qrCode from './qrcode_pctrainor.github.io.png';
import './App.css';
import Contact from './Contact'; // Import Contact component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Phillip C. Trainor</h1>
        <div className="info-container"> {/* Added a container for better spacing */}
          <p>PMP | Naval Aviator | Veteran | Leader</p> 
          <br /><br />        
          <a
          href="https://pctrainor.github.io/my_personal_site/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={qrCode}
            className="App-logo"
            alt="logo"
            title="click for full portfolio"
          />
        </a>
        <br /><br /><br /> 
        <figcaption>Click/Scan the QR code above to visit my full portfolio!</figcaption>
          <Contact /> {/* Contact component placed here */}
        </div>
      </header>
    </div>
  );
}

export default App;
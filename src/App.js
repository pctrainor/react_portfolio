import React from 'react';
import qrCode from './qrcode_pctrainor.github.io.png';
import './App.css';

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        <h1>
        Phillip C. Trainor</h1><br/>
        <a href="https://pctrainor.github.io/my_personal_site/" target="_blank" rel="noopener noreferrer">
          <img src={qrCode} className="App-logo" alt="logo"  title='click for full portfolio'/>
        </a>
        <br/><br/>
        <figcaption>Click the QR code to visit my full portfolio</figcaption>
        <h1><p>PMP | Naval Aviator
          <br/>Veteran | Leader</p>
          <p><a href="mailto:ptrainor@uark.edu" className="mailto-link">ptrainor@uark.edu</a></p>
        </h1>
      </header>
    </div>
  );
}

export default App;
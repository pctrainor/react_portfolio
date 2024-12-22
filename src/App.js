import React from 'react';
import qrCode from './qrcode_pctrainor.github.io.png';
import './App.css';

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        <a href="https://data-phil.com" target="_blank" rel="noopener noreferrer">
          <img src={qrCode} className="App-logo" alt="logo"  title='click for full portfolio'/>
        </a>
        <h1>
        <br/> Phillip C. Trainor <br/>
          <p>PMP | Naval Aviator <br/>
          Veteran | Leader </p>
          
          <a href="mailto:ptrainor@uark.edu" className="mailto-link">ptrainor@uark.edu</a>
        </h1>
      </header>
    </div>
  );
}

export default App;
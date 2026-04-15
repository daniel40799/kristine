import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const images = ['tin (1).jpg', 'tin (5).jpg', 'tin (6).jpg', 'tin (7).jpg', 'tin (8).jpg'];

  return (
    <div className="App">
      <header className="App-header">
        <h1>hello tenten ko manghod nako dodong and kakat</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', padding: '20px' }}>
          {images.map((image) => (
            <div key={image} style={{ textAlign: 'center' }}>
              <img src={`/${image}`} alt={image} style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
          ))}
        </div>

          <h1>ako manghod gwapo ako manghod gwapa ako gwapa</h1>
      </header>
    </div>
  );
}

export default App;

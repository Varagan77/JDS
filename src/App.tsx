import React, { useState, useEffect } from 'react';
import './assets/App.css';
import './assets/index.css';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark-theme', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    if (storedMode === 'true') setDarkMode(true);
  }, []);

  return (
    <div className="app-container">
      <div className="theme-toggle-container">
        <label className="theme-switch">
          <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          <span className="slider"></span>
        </label>
      </div>

      <h1>Welcome to JDS Technologies</h1>

      <div className="services-container">
        <div className="service">
          <h2>Security</h2>
          <p>Protect your digital assets with top-tier security technologies, ensuring your data is safe and secure.</p>
        </div>
        <div className="service">
          <h2>Website Development</h2>
          <p>Get a modern, responsive website built to engage users and grow your business with our development team.</p>
        </div>
        <div className="service">
          <h2>Software Technologies</h2>
          <p>Custom software development to streamline your operations and enhance productivity.</p>
        </div>
      </div>

      <button className="contact-button">Get in Touch</button>
    </div>
  );
};

export default App;

import React from 'react';
import './assets/App.css'
import './assets/index.css';
const Header: React.FC = () => {
  return (
    <header>
      <h1>JDS HEADER</h1>
      <nav>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
      </nav>
    </header>
  );
};

export default Header;

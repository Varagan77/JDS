import React from 'react';
import './assets/App.css';
import './assets/index.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; 2025 JDS Technologies. All rights reserved.</p>
        <div className="footer-links">
          <a href="#privacy-policy">Privacy Policy</a> <a href="#terms-of-service">Terms of Service</a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;

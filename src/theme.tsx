import React from 'react';

interface ThemeProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Theme: React.FC<ThemeProps> = ({ darkMode, setDarkMode }) => {
  return (
    <div className="theme-toggle-container">
      <label className="theme-switch">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Theme;

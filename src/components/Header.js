// Header.js
import React from 'react';

function Header({ darkMode, onDarkModeClick }) {
  return (
    <header className={darkMode ? 'dark' : ''}>
      <h1>My App</h1>
      <button onClick={onDarkModeClick}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
}

export default Header;

import React, { useState } from 'react';
import Home from './Home';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <button onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
      <Home />
    </div>
  );
};

export default App;
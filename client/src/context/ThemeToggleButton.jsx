import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeToggleButton = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <button onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 cursor-pointer
                 text-black dark:text-white transition-colors duration-300
                 focus:outline-none"
      title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        // Moon icon for switching to dark mode
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      ) : (
        // Sun icon for switching to light mode
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M12 3v2m0 14v2m9-9h-2M5 12H3m16.24 4.24l-1.42-1.42M6.34 
                  6.34L4.92 4.92m12.02 0l1.42 1.42M6.34 
                  17.66l-1.42 1.42M12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggleButton;

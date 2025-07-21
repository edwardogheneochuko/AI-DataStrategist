// src/context/ThemeContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

 const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  // Set theme from localStorage or system preference on mount
  useEffect(() => {
    if (theme === 'dark'){
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme])
 
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light'); 
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider
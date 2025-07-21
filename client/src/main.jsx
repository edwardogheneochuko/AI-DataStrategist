import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@fontsource/roboto"; // Defaults to weight 400
import ThemeContextProvider from './context/ThemeContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
        <App />
    </ThemeContextProvider>
  </StrictMode>,
)

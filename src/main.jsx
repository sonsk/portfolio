import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Assurez-vous que i18n est initialisé avant de rendre l'application
import App from './App.jsx'
import './i18n.js'; // i18n est initialisé avant le rendu de l'application

createRoot(document.getElementById('root')).render(
  <StrictMode> 
      <App /> 
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assests/components/index.css'
import App from './assests/components/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

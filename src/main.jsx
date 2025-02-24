import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Index from './index.jsx'
import './main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Index />
  </StrictMode>,
)

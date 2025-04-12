import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TestGavin from './TestGavin.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TestGavin />
  </StrictMode>,
)

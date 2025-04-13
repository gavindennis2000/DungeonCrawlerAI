import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserText from './UserText.jsx'
import StoryText from './StoryText.jsx'
import ImageDisplay from './ImageDisplay.jsx'
import DungeonCrawler from './DungeonCrawler.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <DungeonCrawler />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


import UserText from './UserText.jsx'
import StoryText from './StoryText.jsx'
import ImageDisplay from './ImageDisplay.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import DungeonCrawler from './DungeonCrawler.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App />
    <DungeonCrawler />
    <Footer />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
<<<<<<< HEAD
=======
import UserText from './UserText.jsx'
import StoryText from './StoryText.jsx'
import ImageDisplay from './ImageDisplay.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import DungeonCrawler from './DungeonCrawler.jsx'
>>>>>>> 180ed13ce3b0fd73e5047ab5f7da6e61e361eda7

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App />
<<<<<<< HEAD
=======
    <DungeonCrawler />
    <Footer />
>>>>>>> 180ed13ce3b0fd73e5047ab5f7da6e61e361eda7
  </StrictMode>,
)

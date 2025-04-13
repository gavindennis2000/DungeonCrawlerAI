import { useState } from 'react'
import './App.css'
import '../public/logo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img
        src={"logo.png"}
        alt="My Logo"
        style={{ display: 'block', margin: '0 auto' }}
      />
    </>
  )
}

export default App

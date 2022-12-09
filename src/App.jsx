import { useState } from 'react'
import React from 'react'
import { ReactDOM } from 'react'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/tailwind.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Intro />
      <Portfolio />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

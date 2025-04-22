import { useState } from 'react'
import './App.css'
import LandingPage from './LandingPage'
import AboutMe from './AboutMe'
import ProjectPage from './ProjectPage'
import Blog from './blog'
import ContactMe from './ContactMe'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LandingPage />
      <AboutMe />
      <ProjectPage />
      <Blog />
      <ContactMe />
      <Footer />
    </>
  )
}

export default App

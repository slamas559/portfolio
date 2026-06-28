import { useState } from 'react';
import './App.css';
import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import ProjectPage from './ProjectPage';
import Blog from './Blog';
import ContactMe from './ContactMe';
import Footer from './Footer';

// New Components
import Preloader from './components/Preloader';
import CommandPalette from './components/CommandPalette';
import ThemeToggle from './components/ThemeToggle';
import ContributionGraph from './components/ContributionGraph';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import BlobBackground from './components/BlobBackground';

function App() {
  return (
    <>
      <Preloader />
      <CommandPalette />
      <ThemeToggle />
      
      {/* New Global UI Elements */}
      <CustomCursor />
      <ScrollProgress />
      <BlobBackground />
      
      <LandingPage />
      
      <AboutMe />
      <div className="bg-transparent">
        <ContributionGraph />
      </div>

      <ProjectPage />
      <Blog />
      <ContactMe />
      <Footer />
    </>
  )
}

export default App;
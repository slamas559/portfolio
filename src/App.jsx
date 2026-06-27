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

function App() {
  return (
    <>
      <Preloader />
      <CommandPalette />
      <ThemeToggle />
      
      <LandingPage />
      
      <AboutMe />
            <AboutMe />
      {/* Add the Contribution Graph right after AboutMe */}
      <div className="bg-[#0d1117] ">
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
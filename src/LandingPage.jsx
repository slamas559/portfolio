import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Terminal, Github, Linkedin, Mail } from 'lucide-react';
import myImage from "./assets/myImage.png";

export default function ModernPortfolio() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const texts = ["npm run dev", "python manage.py runserver", "node server.js"];
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Bulletproof Typewriter Effect (Types, pauses, deletes, next word)
  useEffect(() => {
    const currentText = texts[textIndex];
    let timer;

    if (!isDeleting && displayedText === currentText) {
      // Pause at the end of the word before deleting
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayedText === '') {
      // Move to the next word when finished deleting
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    } else {
      // Type or Delete a character
      timer = setTimeout(() => {
        setDisplayedText(prev => 
          isDeleting 
            ? currentText.substring(0, prev.length - 1)
            : currentText.substring(0, prev.length + 1)
        );
      }, isDeleting ? 50 : 100); // Deletes faster than it types
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, textIndex]);

  return (
    <div className="bg-[#0d1117] text-gray-300 min-h-screen font-mono overflow-hidden">
      {/* Navbar - VS Code Style Tabs */}
      <nav className="sticky top-0 z-50 bg-[#161b22] border-b border-[#30363d]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[var(--accent-color)] font-bold">
            <Terminal size={20} />
            <span>slam@salam-dev:~</span>
          </div>
          
          <ul className="hidden md:flex gap-6 text-sm">
            {['about', 'projects', 'blog', 'contact'].map((item) => (
              <li key={item}>
                <a href={`#${item}`} className="text-gray-400 hover:text-[var(--accent-color)] transition-colors duration-200">
                  ./{item}
                </a>
              </li>
            ))}
          </ul>

          <button onClick={() => setIsNavOpen(!isNavOpen)} className="md:hidden text-gray-400">
            {isNavOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isNavOpen && (
          <div className="md:hidden bg-[#161b22] border-t border-[#30363d] px-6 py-4 flex flex-col gap-4">
            {['about', 'projects', 'blog', 'contact'].map((item) => (
              <a key={item} href={`#${item}`} className="text-gray-400 hover:text-[var(--accent-color)] transition-colors">
                ./{item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content - IDE Layout */}
      <section id="home" className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 min-h-[80vh] flex items-center">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 w-full">
          
          {/* Left Side: Code Editor */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
            className="bg-[#0d1117] border border-[#30363d] rounded-lg overflow-hidden shadow-2xl"
          >
            <div className="bg-[#161b22] px-4 py-2 border-b border-[#30363d] flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
              </div>
              <span className="text-xs text-gray-500 ml-2">developer.ts</span>
            </div>
            <div className="p-6 text-sm leading-relaxed">
              <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {'{'}</p>
              <p className="pl-4"><span className="text-[var(--accent-color)]">name</span>: <span className="text-green-400">'Abdulsalam'</span>,</p>
              <p className="pl-4"><span className="text-[var(--accent-color)]">title</span>: <span className="text-green-400">'Full-Stack Engineer'</span>,</p>
              <p className="pl-4"><span className="text-[var(--accent-color)]">stack</span>: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Django'</span>, <span className="text-green-400">'Node'</span>],</p>
              <p className="pl-4"><span className="text-[var(--accent-color)]">available</span>: <span className="text-orange-400">true</span>,</p>
              <p className="pl-4"><span className="text-[var(--accent-color)]">passion</span>: <span className="text-green-400">'Solving complex problems'</span>,</p>
              <p>{'}'}</p>
              <br />
              <p className="text-gray-500">// Let's build something amazing.</p>
            </div>
          </motion.div>

          {/* Right Side: Terminal & Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Terminal Window */}
            <div className="bg-[#161b22] border border-[#30363d] rounded-lg overflow-hidden shadow-2xl flex-1">
              <div className="bg-[#0d1117] px-4 py-2 border-b border-[#30363d] text-xs text-gray-500">
                bash - 80x24
              </div>
              <div className="p-6 font-mono text-sm">
                <p className="flex items-center gap-2">
                  <span className="text-[var(--accent-color)]">➜</span> 
                  <span className="text-blue-400">~</span> 
                  <span className="text-gray-300">{displayedText}</span>
                  <span className="inline-block w-2 h-4 bg-[var(--accent-color)] animate-pulse"></span>
                </p>
                <br />
                <p className="text-gray-400">&gt; Initializing portfolio_2025...</p>
                <p className="text-green-400">&gt; ✓ Modules loaded.</p>
                <p className="text-green-400">&gt; ✓ UI Rendered.</p>
                <p className="text-gray-400">&gt; Ready for connections.</p>
              </div>
            </div>

            {/* Profile Image & Socials */}
            <div className="flex items-center gap-6 bg-[#161b22] border border-[#30363d] p-4 rounded-lg">
              <div className="relative w-24 h-24 flex-shrink-0">
                <div className="absolute inset-0 bg-[var(--accent-color)] opacity-10 blur-xl rounded-full"></div>
                <img src={myImage} alt="Abdulsalam" className="w-24 h-24 object-cover rounded-full border-2 border-[#30363d] relative z-10" />
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="text-xl font-bold text-gray-100">Abdulsalam Abayomi</h1>
                <div className="flex gap-4">
                  <a href="https://github.com/slamas559" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[var(--accent-color)] transition-colors"><Github size={20} /></a>
                  <a href="https://www.linkedin.com/in/salam-abdulsalam-5a0b08278/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[var(--accent-color)] transition-colors"><Linkedin size={20} /></a>
                  <a href="mailto:abdulsalamabayomi300@gmail.com" className="text-gray-400 hover:text-[var(--accent-color)] transition-colors"><Mail size={20} /></a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
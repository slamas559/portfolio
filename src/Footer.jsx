import React from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#161b22] border-t border-[#30363d] text-gray-400 font-mono">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Copyright */}
        <div className="flex items-center gap-3 text-sm">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
          </div>
          <span>© {new Date().getFullYear()} Abdulsalam. All systems operational.</span>
        </div>

        {/* Center: Socials */}
        <div className="flex gap-6">
          <a href="https://github.com/slamas559" target="_blank" rel="noreferrer" className="hover:text-[var(--accent-color)] transition-colors"><Github size={18} /></a>
          <a href="#" className="hover:text-[var(--accent-color)] transition-colors"><Linkedin size={18} /></a>
          <a href="#" className="hover:text-[var(--accent-color)] transition-colors"><Twitter size={18} /></a>
          <a href="mailto:abdulsalamabayomi300@gmail.com" className="hover:text-[var(--accent-color)] transition-colors"><Mail size={18} /></a>
        </div>

        {/* Right: Scroll to top */}
        <button onClick={scrollToTop} className="flex items-center gap-2 text-sm hover:text-[var(--accent-color)] transition-colors group">
          Back to top 
          <span className="p-1 border border-[#30363d] rounded group-hover:border-[var(--accent-color)] transition-colors">
            <ArrowUp size={12} />
          </span>
        </button>
      </div>
    </footer>
  );
}
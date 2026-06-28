import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Terminal, User, Code2, BookOpen, Mail } from 'lucide-react';

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  const commands = [
    { name: 'Go to Home', icon: Terminal, action: () => window.location.href = '#home' },
    { name: 'Go to About', icon: User, action: () => window.location.href = '#about' },
    { name: 'Go to Projects', icon: Code2, action: () => window.location.href = '#projects' },
    { name: 'Go to Blog', icon: BookOpen, action: () => window.location.href = '#blog' },
    { name: 'Go to Contact', icon: Mail, action: () => window.location.href = '#contact' },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredCommands = commands.filter(cmd => 
    cmd.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm flex items-start justify-center pt-[15vh]"
          onClick={() => setIsOpen(false)}
        >
          <motion.div 
            initial={{ scale: 0.95, y: -20 }} 
            animate={{ scale: 1, y: 0 }} 
            exit={{ scale: 0.95, y: -20 }}
            className="w-full max-w-xl bg-[#161b22] border border-[#30363d] rounded-lg shadow-2xl overflow-hidden font-mono"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 p-4 border-b border-[#30363d]">
              <Search size={18} className="text-gray-500" />
              <input 
                autoFocus 
                type="text" 
                placeholder="Type a command or search..." 
                className="flex-1 bg-transparent text-gray-200 outline-none placeholder-gray-600 text-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <kbd className="text-xs text-gray-500 border border-[#30363d] px-2 py-0.5 rounded">ESC</kbd>
            </div>
            
            <div className="p-2 max-h-80 overflow-y-auto">
              {filteredCommands.map((cmd, idx) => {
                const Icon = cmd.icon;
                return (
                  <button 
                    key={idx} 
                    onClick={() => { cmd.action(); setIsOpen(false); }}
                    className="w-full flex items-center gap-3 p-3 rounded-md text-left text-gray-300 hover:bg-[var(--bg-color)] transition-colors text-sm"
                  >
                    <Icon size={16} className="text-[var(--accent-color)]" />
                    {cmd.name}
                  </button>
                );
              })}
              {filteredCommands.length === 0 && (
                <p className="p-4 text-sm text-gray-500 text-center">No commands found.</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
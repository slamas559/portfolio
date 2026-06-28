import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, X } from 'lucide-react';

export default function ThemeToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('matrix');

  const themes = [
    { id: 'matrix', label: 'Matrix Green', color: '#00FF00' },
    { id: 'gold', label: 'Terminal Gold', color: '#FFD700' },
    { id: 'cyber', label: 'Cyberpunk Blue', color: '#00E5FF' },
  ];

  const applyTheme = (themeId) => {
    setTheme(themeId);
    if (themeId === 'matrix') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', themeId);
    }
    setIsOpen(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-3 bg-[#161b22] border border-[#30363d] rounded-full text-gray-400 hover:text-[var(--accent-color)] hover:border-[var(--accent-color)] transition-all duration-300 shadow-xl"
        title="Open Settings (Themes)"
      >
        <Settings size={20} className="hover:rotate-90 transition-transform duration-300" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[95] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 font-mono"
            onClick={() => setIsOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9 }} 
              animate={{ scale: 1 }} 
              exit={{ scale: 0.9 }}
              className="w-full max-w-md bg-[#161b22] border border-[#30363d] rounded-lg shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-[#30363d]">
                <h3 className="text-sm text-gray-200 flex items-center gap-2">
                  <Settings size={16} className="text-[var(--accent-color)]" /> settings.json
                </h3>
                <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-200">
                  <X size={18} />
                </button>
              </div>
              
              <div className="p-6">
                <p className="text-xs text-gray-500 mb-4">// Select interface accent color</p>
                <div className="flex flex-col gap-2">
                  {themes.map((t) => (
                    <button 
                      key={t.id} 
                      onClick={() => applyTheme(t.id)}
                      className={`flex items-center justify-between p-3 rounded-md border transition-all ${theme === t.id ? 'border-[var(--accent-color)] bg-[var(--bg-color)]' : 'border-[#30363d] hover:border-gray-600'}`}
                    >
                      <span className="flex items-center gap-3 text-sm text-gray-300">
                        <span className="w-4 h-4 rounded-full" style={{ backgroundColor: t.color, boxShadow: `0 0 10px ${t.color}` }}></span>
                        {t.label}
                      </span>
                      {theme === t.id && <span className="text-xs text-[var(--accent-color)]">✓ Active</span>}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
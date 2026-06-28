import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [lines, setLines] = useState([]);

  const bootSequence = [
    "> Booting portfolio_v3.0...",
    "> Initializing React kernel...",
    "> Loading UI modules [████████████] 100%",
    "> Establishing secure connection...",
    "> Welcome."
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < bootSequence.length) {
        setLines(prev => [...prev, bootSequence[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(() => setLoading(false), 600);
      }
    }, 350);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div 
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-[var(--bg-color)] flex items-center justify-center font-mono"
        >
          <div className="w-full max-w-md p-6 text-sm text-gray-300">
            {lines.map((line, idx) => (
              <motion.p 
                key={idx} 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className={idx === lines.length - 1 && idx === bootSequence.length - 1 ? 'text-[var(--accent-color)]' : 'text-gray-400'}
              >
                {line}
              </motion.p>
            ))}
            <span className="inline-block w-2 h-4 bg-[var(--accent-color)] animate-pulse mt-2"></span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
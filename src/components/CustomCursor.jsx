import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useSpring(useMotionValue(-100), { stiffness: 500, damping: 28, mass: 0.5 });
  const cursorY = useSpring(useMotionValue(-100), { stiffness: 500, damping: 28, mass: 0.5 });

  useEffect(() => {
    // Only enable on desktop
    if (window.matchMedia('(pointer: fine)').matches === false) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHoverIn = (e) => {
      if (e.target.closest('a, button, input, textarea, [role="button"]')) {
        setIsHovering(true);
      }
    };

    const handleHoverOut = (e) => {
      if (e.target.closest('a, button, input, textarea, [role="button"]')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleHoverIn);
    document.addEventListener('mouseout', handleHoverOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleHoverIn);
      document.removeEventListener('mouseout', handleHoverOut);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="hidden md:block pointer-events-none fixed top-0 left-0 z-[9999]">
      {/* Outer Lagging Ring */}
      <motion.div
        style={{ translateX: cursorX, translateY: cursorY }}
        className="absolute -ml-4 -mt-4 flex items-center justify-center"
      >
        <motion.div
          animate={{ scale: isHovering ? 1.8 : 1, opacity: isHovering ? 1 : 0.4 }}
          transition={{ duration: 0.2 }}
          className="w-8 h-8 rounded-full border-2 border-[var(--accent-color)]"
        ></motion.div>
      </motion.div>
      
      {/* Inner Instant Dot */}
      <motion.div
        style={{ translateX: cursorX, translateY: cursorY }}
        className="absolute -ml-1 -mt-1"
      >
        <motion.div
          animate={{ scale: isHovering ? 0 : 1 }}
          className="w-2 h-2 rounded-full bg-[var(--accent-color)]"
        ></motion.div>
      </motion.div>
    </div>
  );
}
import React from 'react';

export default function ContributionGraph() {
  // Generate a random-ish 7x14 grid representing contributions
  const days = Array.from({ length: 7 * 14 }, () => {
    const rand = Math.random();
    if (rand > 0.8) return 4; // High
    if (rand > 0.6) return 3; // Med
    if (rand > 0.4) return 2; // Low
    if (rand > 0.2) return 1; // Minimal
    return 0; // None
  });

  // Fixed: Removed Tailwind opacity modifiers on CSS variables
  const intensityClasses = [
    'bg-[#161b22]',                      // 0 - Empty
    'bg-[#30363d]',                      // 1 - Minimal (Dark Gray)
    'bg-[#4d5666]',                      // 2 - Low (Lighter Gray)
    'bg-[var(--accent-color)] opacity-50', // 3 - Med (Half opacity Accent)
    'bg-[var(--accent-color)]'             // 4 - High (Full Accent)
  ];

  return (
    <div className="bg-[#161b22] max-w-3xl px-4 md:px-6 mx-auto -mt-16 border border-[#30363d] rounded-lg p-6 font-mono">
      <h3 className="text-lg font-bold text-gray-100 mb-4 flex items-center gap-2">
        <span className="text-[var(--accent-color)]">$</span> git log --stat
      </h3>
      <div className="grid grid-cols-[repeat(14,_1fr)] gap-1.5">
        {days.map((level, idx) => (
          <div 
            key={idx} 
            className={`w-full aspect-square rounded-sm ${intensityClasses[level]} hover:ring-1 hover:ring-[var(--accent-color)] transition-all`}
            title={`${level * 4} contributions`}
          ></div>
        ))}
      </div>
      <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
        <span>Less</span>
        <div className="flex gap-1.5">
          {intensityClasses.map((cls, idx) => (
            <div key={idx} className={`w-3 h-3 rounded-sm ${cls}`}></div>
          ))}
        </div>
        <span>More</span>
      </div>
    </div>
  );
}
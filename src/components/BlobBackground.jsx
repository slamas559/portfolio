import React from 'react';
import { motion } from 'framer-motion';

// A curated array of 15 blobs with varying sizes, blurs, speeds, and paths
const blobConfigs = [
  { size: 500, blur: 120, opacity: 0.12, duration: 25, path: { x: ['0vw', '70vw', '20vw', '0vw'], y: ['0vh', '50vh', '80vh', '0vh'] } },
  { size: 60, blur: 20, opacity: 0.4, duration: 12, path: { x: ['80vw', '10vw', '50vw', '80vw'], y: ['10vh', '40vh', '70vh', '10vh'] } },
  { size: 300, blur: 90, opacity: 0.15, duration: 30, path: { x: ['50vw', '0vw', '80vw', '50vw'], y: ['80vh', '30vh', '10vh', '80vh'] } },
  { size: 90, blur: 30, opacity: 0.35, duration: 15, path: { x: ['10vw', '60vw', '90vw', '10vw'], y: ['80vh', '10vh', '40vh', '80vh'] } },
  { size: 200, blur: 70, opacity: 0.2, duration: 20, path: { x: ['90vw', '30vw', '10vw', '90vw'], y: ['50vh', '80vh', '20vh', '50vh'] } },
  { size: 40, blur: 15, opacity: 0.5, duration: 10, path: { x: ['40vw', '80vw', '20vw', '40vw'], y: ['20vh', '60vh', '90vh', '20vh'] } },
  { size: 400, blur: 110, opacity: 0.1, duration: 28, path: { x: ['20vw', '90vw', '40vw', '20vw'], y: ['60vh', '0vh', '80vh', '60vh'] } },
  { size: 120, blur: 40, opacity: 0.3, duration: 18, path: { x: ['70vw', '10vw', '30vw', '70vw'], y: ['90vh', '50vh', '0vh', '90vh'] } },
  { size: 50, blur: 20, opacity: 0.45, duration: 14, path: { x: ['30vw', '70vw', '10vw', '30vw'], y: ['10vh', '90vh', '40vh', '10vh'] } },
  { size: 350, blur: 100, opacity: 0.13, duration: 32, path: { x: ['80vw', '0vw', '50vw', '80vw'], y: ['30vh', '70vh', '10vh', '30vh'] } },
  { size: 80, blur: 30, opacity: 0.35, duration: 16, path: { x: ['0vw', '50vw', '80vw', '0vw'], y: ['40vh', '10vh', '60vh', '40vh'] } },
  { size: 250, blur: 80, opacity: 0.18, duration: 22, path: { x: ['60vw', '20vw', '90vw', '60vw'], y: ['0vh', '80vh', '30vh', '0vh'] } },
  { size: 35, blur: 10, opacity: 0.55, duration: 8, path: { x: ['50vw', '90vw', '10vw', '50vw'], y: ['50vh', '20vh', '80vh', '50vh'] } },
  { size: 180, blur: 60, opacity: 0.22, duration: 19, path: { x: ['10vw', '40vw', '70vw', '10vw'], y: ['70vh', '0vh', '50vh', '70vh'] } },
  { size: 45, blur: 15, opacity: 0.45, duration: 11, path: { x: ['20vw', '80vw', '40vw', '20vw'], y: ['30vh', '10vh', '90vh', '30vh'] } },
];

export default function BlobBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0d1117] pointer-events-none">
      {blobConfigs.map((blob, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: `${blob.size}px`,
            height: `${blob.size}px`,
            backgroundColor: 'var(--accent-color)',
            filter: `blur(${blob.blur}px)`,
            opacity: blob.opacity,
          }}
          animate={{
            x: blob.path.x,
            y: blob.path.y,
            scale: [1, 1.3, 0.8, 1],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
'use client';

import { motion } from 'framer-motion';

export default function PumpLoader() {
  return (
    <div className="fixed inset-0 z-[9999] h-screen w-screen bg-[#0B001A] flex items-center justify-center overflow-hidden">
      <svg
        viewBox="0 0 200 200"
        className="w-32 h-32"
        style={{ filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.8))' }}
      >
        <motion.path
          d="M40 100C40 60 80 60 100 100C120 140 160 140 160 100C160 60 120 60 100 100C80 140 40 140 40 100Z"
          fill="none"
          stroke="#D4AF37"
          strokeWidth={1.5}
          strokeLinecap="round"
          initial={{ pathLength: 0.15, pathOffset: 0, opacity: 0 }}
          animate={{ pathOffset: 1, opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
      </svg>
    </div>
  );
}

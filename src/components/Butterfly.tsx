import { motion } from 'motion/react';

interface ButterflyProps {
  className?: string;
  animated?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function Butterfly({ className = '', animated = true, size = 'md' }: ButterflyProps) {
  const sizes = {
    sm: 'w-12 h-12',
    md: 'w-24 h-24',
    lg: 'w-40 h-40'
  };

  const butterflyVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const wingVariants = {
    animate: {
      rotateY: [0, 15, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.svg
      viewBox="0 0 200 200"
      className={`${sizes[size]} ${className}`}
      variants={butterflyVariants}
      initial={animated ? "initial" : undefined}
      animate={animated ? "animate" : undefined}
    >
      {/* Left wing */}
      <motion.path
        d="M100 100 Q60 60 40 80 Q20 100 30 120 Q40 140 60 130 Q80 120 100 100 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
        variants={animated ? wingVariants : undefined}
        style={{ transformOrigin: '100px 100px' }}
      />
      
      {/* Right wing */}
      <motion.path
        d="M100 100 Q140 60 160 80 Q180 100 170 120 Q160 140 140 130 Q120 120 100 100 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
        variants={animated ? wingVariants : undefined}
        style={{ transformOrigin: '100px 100px', scaleX: -1 }}
      />
      
      {/* Lower left wing */}
      <motion.path
        d="M100 100 Q70 120 50 140 Q30 160 40 180 Q50 195 70 185 Q90 175 100 150 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.4"
        variants={animated ? wingVariants : undefined}
        style={{ transformOrigin: '100px 100px' }}
      />
      
      {/* Lower right wing */}
      <motion.path
        d="M100 100 Q130 120 150 140 Q170 160 160 180 Q150 195 130 185 Q110 175 100 150 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.4"
        variants={animated ? wingVariants : undefined}
        style={{ transformOrigin: '100px 100px', scaleX: -1 }}
      />
      
      {/* Body */}
      <motion.ellipse
        cx="100"
        cy="100"
        rx="3"
        ry="35"
        fill="currentColor"
        opacity="0.7"
      />
      
      {/* Antennae */}
      <motion.path
        d="M100 65 Q95 50 90 45"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.5"
      />
      <motion.path
        d="M100 65 Q105 50 110 45"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.5"
      />
    </motion.svg>
  );
}

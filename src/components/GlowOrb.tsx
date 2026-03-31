import { motion, MotionValue } from 'motion/react';

interface GlowOrbProps {
  size?: number;
  color?: string;
  opacity?: number;
  blur?: number;
  animate?: boolean;
  className?: string;
  x?: number | MotionValue<number>;
  y?: number | MotionValue<number>;
  style?: React.CSSProperties;
}

export function GlowOrb({ 
  size = 400, 
  color = '#f4b41a', 
  opacity = 0.15,
  blur = 100,
  animate = true,
  className = '',
  x,
  y,
  style
}: GlowOrbProps) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity: opacity,
        filter: `blur(${blur}px)`,
        ...(style || {})
      }}
      {...(x !== undefined ? { x } : {})}
      {...(y !== undefined ? { y } : {})}
      animate={animate ? {
        scale: [1, 1.2, 1],
        opacity: [opacity, opacity * 1.3, opacity],
      } : undefined}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
}

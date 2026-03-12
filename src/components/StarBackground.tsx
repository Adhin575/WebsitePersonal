import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface Star {
  id: number;
  top: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
}

interface ShootingStar {
  id: number;
  top: string;
  left: string;
  delay: number;
}

export const StarBackground: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);
  const { mode } = useTheme();

  useEffect(() => {
    // Generate static twinkling stars
    const newStars = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
    }));
    setStars(newStars);

    // Periodically generate shooting stars
    const interval = setInterval(() => {
      const id = Date.now();
      const newShootingStar = {
        id,
        top: `${Math.random() * 50}%`,
        left: `${Math.random() * 100}%`,
        delay: 0,
      };
      setShootingStars(prev => [...prev.slice(-10), newShootingStar]);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const starColor = mode === 'dark' ? 'white' : 'var(--color-accent)';
  const starOpacity = mode === 'dark' ? 0.8 : 0.6;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Twinkling Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ opacity: 0.1 }}
          animate={{ opacity: [0.1, starOpacity, 0.1] }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
          className="absolute rounded-full"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            backgroundColor: starColor,
            boxShadow: mode === 'dark' ? `0 0 5px white` : `0 0 5px var(--color-accent)`,
          }}
        />
      ))}

      {/* Shooting Stars */}
      {shootingStars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
          animate={{ 
            x: [0, 400], 
            y: [0, 400], 
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          className="absolute w-1 h-1 rounded-full"
          style={{
            top: star.top,
            left: star.left,
            backgroundColor: starColor,
            boxShadow: mode === 'dark' 
              ? `0 0 20px 2px white, 0 0 40px 4px rgba(var(--accent-rgb), 0.3)` 
              : `0 0 20px 2px var(--color-accent), 0 0 40px 4px rgba(var(--accent-rgb), 0.2)`,
          }}
        >
          <div className={`absolute top-1/2 left-1/2 -translate-x-full -translate-y-1/2 w-20 h-[1px] rotate-45 origin-right ${
            mode === 'dark' ? 'bg-gradient-to-r from-transparent via-white to-transparent' : 'bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent'
          }`} />
        </motion.div>
      ))}
    </div>
  );
};

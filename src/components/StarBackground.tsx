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
  color?: string;
}

interface ShootingStar {
  id: number;
  top: string;
  left: string;
  delay: number;
  color?: string;
}

export const StarBackground: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);
  const [satellites, setSatellites] = useState<{ id: number; top: string; duration: number }[]>([]);
  const { mode } = useTheme();

  useEffect(() => {
    const starColorsDark = [
      'rgba(255, 255, 255, 0.8)',
      '#FFD700', // Gold
      '#FF69B4', // Hot Pink
      '#00CED1', // Dark Turquoise
      '#9370DB', // Medium Purple
    ];
    
    const starColorsLight = [
      'rgba(var(--accent-rgb), 1)',
      '#FF4500', // Orange Red
      '#C71585', // Medium Violet Red
      '#1E90FF', // Dodger Blue
      '#8A2BE2', // Blue Violet
      '#228B22', // Forest Green
    ];

    const starColors = mode === 'dark' ? starColorsDark : starColorsLight;

    // Generate static twinkling stars
    const newStars = Array.from({ length: 200 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 4 + 2,
      delay: Math.random() * 10,
      color: starColors[Math.floor(Math.random() * starColors.length)],
    }));
    setStars(newStars);

    // Periodically generate shooting stars (high frequency for visual interest)
    const shootingStarInterval = setInterval(() => {
      const id = Date.now();
      const newShootingStar = {
        id,
        top: `${Math.random() * 80}%`,
        left: `${Math.random() * 100}%`,
        delay: 0,
        color: starColors[Math.floor(Math.random() * starColors.length)],
      };
      setShootingStars(prev => [...prev.slice(-12), newShootingStar]);
    }, 1200);

    // Periodically generate satellites
    const satelliteInterval = setInterval(() => {
      const id = Date.now();
      const newSatellite = {
        id,
        top: `${10 + Math.random() * 60}%`,
        duration: 25 + Math.random() * 15,
      };
      setSatellites(prev => [...prev.slice(-3), newSatellite]);
    }, 12000);

    return () => {
      clearInterval(shootingStarInterval);
      clearInterval(satelliteInterval);
    };
  }, [mode]);

  const starColor = mode === 'dark' ? 'white' : 'var(--color-accent)';
  const starOpacity = mode === 'dark' ? 0.4 : 0.8; // High opacity in light mode for visibility

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-bg-main transition-colors duration-500">
      {/* Background radial gradient to add depth */}
      <div className="absolute inset-0 bg-radial-gradient from-accent/5 via-transparent to-transparent opacity-60 transition-opacity duration-1000" />

      {/* Twinkling Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ opacity: 0.1 }}
          animate={{ 
            opacity: [0.1, starOpacity, 0.1],
            scale: [1, 1.2, 1] 
          }}
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
            backgroundColor: mode === 'dark' ? starColor : star.color,
            boxShadow: mode === 'dark' ? `0 0 4px white` : `0 0 4px ${star.color}`,
          }}
        />
      ))}

      {/* Satellites */}
      {satellites.map((sat) => (
        <motion.div
          key={sat.id}
          initial={{ x: '-10%', opacity: 0 }}
          animate={{ x: '110%', opacity: [0, 1, 1, 0] }}
          transition={{
            duration: sat.duration,
            ease: "linear",
          }}
          className="absolute flex items-center gap-1"
          style={{ top: sat.top }}
        >
          <div className="w-1.5 h-1.5 bg-accent/40 rounded-sm shadow-accent-sm" />
          <div className="w-4 h-[1px] bg-accent/10" />
        </motion.div>
      ))}

      {/* Shooting Stars */}
      {shootingStars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
          animate={{ 
            x: [0, 600], 
            y: [0, 300], 
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="absolute w-1 h-1 rounded-full"
          style={{
            top: star.top,
            left: star.left,
            backgroundColor: mode === 'dark' ? 'white' : star.color,
            boxShadow: mode === 'dark' ? `0 0 20px 4px white` : `0 0 20px 4px ${star.color}`,
          }}
        >
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-full -translate-y-1/2 w-40 h-[1px] rotate-[26.5deg] origin-right"
            style={{
              background: `linear-gradient(to right, transparent, ${mode === 'dark' ? 'rgba(255, 255, 255, 0.4)' : star.color}, transparent)`
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

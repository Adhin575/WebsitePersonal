import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StarBackground } from './components/StarBackground';
import { About } from './components/About';
import { Education } from './components/Education';
import { Portfolio } from './components/Portfolio';
import { ProfessionalExperiences } from './components/ProfessionalExperiences';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left"
      style={{ scaleX }}
    />
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative selection:bg-accent selection:text-white overflow-x-hidden">
        <StarBackground />
        {/* Animated Background Elements */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, Math.random() * 200 - 100, 0],
                x: [0, Math.random() * 200 - 100, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 15 + i * 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-[30vw] h-[30vw] bg-accent/10 blur-[120px] rounded-full"
              style={{
                top: `${(i * 25) % 100}%`,
                left: `${(i * 37) % 100}%`,
              }}
            />
          ))}
        </div>

        <ScrollProgress />
        <Navbar />
        
        <main className="relative z-10">
          <Hero />
          <About />
          <Education />
          <Portfolio />
          <ProfessionalExperiences />
          <Skills />
          <Contact />
        </main>

        <footer className="relative z-10 py-16 px-6 border-t border-border-main bg-bg-main/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-text-main font-display font-black text-xl">
                AVS<span className="text-accent">.</span>
              </p>
              <p className="text-text-sub text-sm">
                © {new Date().getFullYear()} Adhindra VS. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-10">
              <a href="#home" className="text-text-sub hover:text-accent transition-all text-sm font-bold uppercase tracking-widest">Home</a>
              <a href="#portfolio" className="text-text-sub hover:text-accent transition-all text-sm font-bold uppercase tracking-widest">Portfolio</a>
              <a href="#professional-experiences" className="text-text-sub hover:text-accent transition-all text-sm font-bold uppercase tracking-widest">Professional Experiences</a>
              <a href="#contact" className="text-text-sub hover:text-accent transition-all text-sm font-bold uppercase tracking-widest">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

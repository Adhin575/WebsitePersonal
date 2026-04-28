import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StarBackground } from './components/StarBackground';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { ProfessionalExperiences } from './components/ProfessionalExperiences';
import { Education } from './components/Education';

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

const MainContent = () => {
  const { mode } = useTheme();

  return (
    <div className={`relative selection:bg-accent selection:text-white overflow-x-hidden min-h-screen bg-bg-main transition-colors duration-500 ${mode === 'dark' ? 'dark' : ''}`}>
      <StarBackground />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, Math.random() * 100 - 50, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 10 + i * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute w-[40vw] h-[40vw] ${mode === 'dark' ? 'bg-accent/[0.03]' : 'bg-accent/[0.1]'} blur-[150px] rounded-full transition-colors duration-1000`}
            style={{
              top: `${(i * 30) % 100}%`,
              left: `${(i * 45) % 100}%`,
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

        <Skills />

        <section id="experience" className="bg-bg-sub/30 transition-colors duration-500">
          <ProfessionalExperiences />
        </section>

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
            <a href="#experience" className="text-text-sub hover:text-accent transition-all text-sm font-bold uppercase tracking-widest">Experience</a>
            <a href="#contact" className="text-text-sub hover:text-accent transition-all text-sm font-bold uppercase tracking-widest">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}


import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Download, Mail } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import { useTheme } from '../context/ThemeContext';

export const Hero: React.FC = () => {
  const { mode } = useTheme();

  return (
    <section
      id="home"
      className="relative flex items-center min-h-[min(750px,100svh)] pt-24 pb-12 overflow-hidden"
    >
      {/* Theme-aware background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className={`absolute top-1/4 left-1/4 w-[40vw] h-[40vw] ${
            mode === 'dark'
              ? 'bg-accent/[0.03]'
              : 'bg-accent/[0.08]'
          } blur-[120px] rounded-full transition-colors duration-1000`}
        />
        <div
          className={`absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] ${
            mode === 'dark'
              ? 'bg-accent/[0.03]'
              : 'bg-accent/[0.05]'
          } blur-[100px] rounded-full transition-colors duration-1000`}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        {/* Name and photo side by side */}
        <div className="flex items-center justify-between gap-4 sm:gap-8 lg:gap-12">
          <div className="min-w-0 flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(2.4rem,7vw,7rem)] font-display font-bold tracking-tight text-text-main leading-[0.95]"
            >
              Adhindra{' '}
              <span className="italic text-accent">VS</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-base sm:text-xl md:text-3xl lg:text-[2.5rem] text-text-main/90 font-display italic tracking-tight leading-tight"
            >
              {resumeData.title}
            </motion.h2>
          </div>

          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 shrink-0 rounded-full p-1.5 sm:p-2 border border-accent/30 bg-gradient-to-br from-accent/10 to-transparent shadow-2xl"
          >
            <div className="h-full w-full overflow-hidden rounded-full border-2 border-accent/30">
              <img
                src={resumeData.profileImage}
                alt={resumeData.name}
                className="w-full h-full object-cover"
                style={{ objectPosition: '50% 25%' }}
              />
            </div>
          </motion.div>
        </div>

        {/* Professional summary */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35 }}
          className="relative pl-5 sm:pl-7 py-2 mt-6 mb-7 max-w-4xl"
        >
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent shadow-accent-sm" />

          <p className="text-base sm:text-lg lg:text-xl text-text-sub font-medium leading-relaxed italic">
            {resumeData.summary}
          </p>
        </motion.div>

        {/* Navigation buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="flex flex-wrap items-center gap-3 sm:gap-5 relative z-20"
        >
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="group flex items-center gap-3 px-5 sm:px-8 py-4 rounded-xl bg-accent text-white font-black text-xs uppercase tracking-widest transition-all shadow-accent-sm"
          >
            View Portfolio
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href={resumeData.resumeUrl || '#'}
            download
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className={`group flex items-center gap-3 px-5 sm:px-8 py-4 rounded-xl border border-border-main text-text-main font-black text-xs uppercase tracking-widest transition-all ${
              mode === 'dark'
                ? 'bg-bg-sub/50 hover:bg-accent/10'
                : 'bg-white hover:bg-accent/5'
            }`}
          >
            Download Resume
            <Download className="w-4 h-4 group-hover:animate-bounce" />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.07, rotate: 5 }}
            whileTap={{ scale: 0.93 }}
            aria-label="Go to contact section"
            className={`w-12 h-12 rounded-xl border border-border-main flex items-center justify-center text-text-main transition-all ${
              mode === 'dark'
                ? 'bg-bg-sub/50'
                : 'bg-white'
            }`}
          >
            <Mail className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

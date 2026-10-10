
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
      className="relative flex items-center min-h-[min(720px,100svh)] pt-20 pb-10 overflow-hidden"
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

        {/* Main hero content */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-10 lg:gap-14">

          {/* LEFT: Name, description and buttons */}
          <div className="w-full min-w-0 flex-1">

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(2.8rem,6.5vw,6.5rem)] font-display font-bold tracking-tight text-text-main leading-[1.05]"
            >
              Adhindra{' '}
              <span className="italic text-accent">VS</span>
            </motion.h1>

            {/* Professional title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-5 text-xl sm:text-2xl lg:text-3xl text-text-main/90 font-display italic tracking-tight leading-tight"
            >
              {resumeData.title}
            </motion.h2>

            {/* Professional summary */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 }}
              className="relative pl-5 sm:pl-7 py-2 mt-8 mb-8 max-w-3xl"
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

              {/* Portfolio */}
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="group flex items-center gap-3 px-5 sm:px-7 py-4 rounded-xl bg-accent text-white font-black text-xs uppercase tracking-widest transition-all shadow-accent-sm"
              >
                View Portfolio

                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {/* Resume */}
              <motion.a
                href={resumeData.resumeUrl || '#'}
                download
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`group flex items-center gap-3 px-5 sm:px-7 py-4 rounded-xl border border-border-main text-text-main font-black text-xs uppercase tracking-widest transition-all ${
                  mode === 'dark'
                    ? 'bg-bg-sub/50 hover:bg-accent/10'
                    : 'bg-white hover:bg-accent/5'
                }`}
              >
                Download Resume

                <Download className="w-4 h-4 group-hover:animate-bounce" />
              </motion.a>

              {/* Contact */}
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

          {/* RIGHT: Enlarged profile photograph */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: 'easeOut'
            }}
            className="
              relative
              w-56 h-56
              sm:w-72 sm:h-72
              md:w-[300px] md:h-[300px]
              lg:w-[360px] lg:h-[360px]
              xl:w-[420px] xl:h-[420px]
              max-w-full
              shrink-0
              rounded-full
              p-2
              border border-accent/40
              bg-gradient-to-br
              from-accent/20
              via-accent/5
              to-transparent
              shadow-[0_0_60px_rgba(168,85,247,0.12)]
            "
          >
            {/* Photo container */}
            <div
              className="
                relative
                w-full h-full
                overflow-hidden
                rounded-full
                border-[3px] border-accent/40
                bg-bg-sub
              "
            >
              <img
                src={resumeData.profileImage}
                alt={resumeData.name}
                className="
                  w-full h-full
                  object-cover
                  transition-transform duration-700
                  hover:scale-105
                "
                style={{
                  objectPosition: '50% 25%'
                }}
              />
            </div>

            {/* Decorative accent ring */}
            <div
              className="
                absolute -inset-2
                rounded-full
                border border-accent/20
                pointer-events-none
              "
            />

            {/* Subtle outer glow */}
            <div
              className="
                absolute -inset-6
                rounded-full
                bg-accent/[0.04]
                blur-3xl
                -z-10
                pointer-events-none
              "
            />

          </motion.div>

        </div>
      </div>
    </section>
  );
};

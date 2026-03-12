import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Mail, Camera } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const Hero: React.FC = () => {
  const titleWords = resumeData.name.split(" ");

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-accent font-mono text-sm mb-4 tracking-[0.3em] uppercase font-bold"
          >
            Hello, I am
          </motion.p>
          
          <div className="flex flex-wrap gap-x-4 mb-6">
            {titleWords.map((word, i) => (
              <motion.h1
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 100, rotateX: -90 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    rotateX: 0,
                    transition: { 
                      type: "spring", 
                      damping: 10, 
                      stiffness: 100,
                      delay: i * 0.1
                    }
                  }
                }}
                className="text-6xl md:text-8xl font-display font-black leading-tight"
              >
                {word}
              </motion.h1>
            ))}
          </div>

          <motion.h2
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { type: "spring", damping: 20, stiffness: 100, delay: 0.5 }
              }
            }}
            className="text-2xl md:text-3xl text-text-sub mb-8 font-light tracking-tight"
          >
            {resumeData.title}
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.7 }
              }
            }}
            className="text-lg text-text-sub mb-10 max-w-lg leading-relaxed border-l-2 border-accent/30 pl-6"
          >
            {resumeData.summary}
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(var(--accent-rgb), 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="#portfolio"
              className="px-10 py-5 bg-accent text-white rounded-2xl font-bold flex items-center gap-3 transition-all"
            >
              View Portfolio <ArrowRight size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, borderColor: "var(--color-accent)", backgroundColor: "rgba(var(--accent-rgb), 0.05)" }}
              whileTap={{ scale: 0.95 }}
              href={resumeData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 border-2 border-border-main text-text-main rounded-2xl font-bold flex items-center gap-3 transition-all"
              aria-label="Download Resume"
            >
              Download Resume <Download size={20} />
            </motion.a>
            <motion.a
              whileHover={{ rotate: 15, scale: 1.1 }}
              href="#contact"
              className="p-4 rounded-full border border-border-main hover:bg-bg-sub transition-all"
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            {/* Animated Rings */}
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.05, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-6 border-2 border-dashed border-accent/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360, scale: [1, 1.1, 1] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-12 border border-accent/5 rounded-full"
            />
            
            {/* Floating Dots */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{ 
                  duration: 3 + i, 
                  repeat: Infinity, 
                  delay: i * 0.5 
                }}
                className="absolute w-2 h-2 bg-accent rounded-full blur-[1px]"
                style={{
                  top: `${50 + 45 * Math.sin(i * Math.PI / 4)}%`,
                  left: `${50 + 45 * Math.cos(i * Math.PI / 4)}%`,
                }}
              />
            ))}

            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-bg-main shadow-2xl group">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={resumeData.profileImage}
                alt={resumeData.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                style={{ objectPosition: "50% 10%" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

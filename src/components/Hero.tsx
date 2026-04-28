import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Download, Mail } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import { useTheme } from '../context/ThemeContext';

export const Hero: React.FC = () => {
  const { mode } = useTheme();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-1/4 left-1/4 w-[40vw] h-[40vw] ${mode === 'dark' ? 'bg-accent/[0.03]' : 'bg-accent/[0.08]'} blur-[120px] rounded-full transition-colors duration-1000`} />
        <div className={`absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] ${mode === 'dark' ? 'bg-accent/[0.03]' : 'bg-accent/[0.05]'} blur-[100px] rounded-full transition-colors duration-1000`} />
      </div>

      {/* Tiny stars/particles effect */}
      <div className="absolute inset-0 z-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className={`absolute rounded-full animate-pulse transition-colors duration-500 ${mode === 'dark' ? 'bg-white' : 'bg-accent'}`}
            style={{
              width: Math.random() * 2 + 'px',
              height: Math.random() * 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 3 + 2 + 's'
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-[1.1fr,0.9fr] items-center gap-16">
        {/* Left Content */}
        <div className="flex flex-col gap-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[4.5rem] md:text-[6.5rem] lg:text-[8rem] font-display font-bold tracking-tight text-text-main leading-[0.9]"
          >
            Adhindra <span className="italic text-accent">VS</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-[2.5rem] text-text-main/90 font-display italic tracking-tight leading-none"
          >
            Aerospace & Mechanical Engineer
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative px-8 py-2 my-8 flex items-center"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent shadow-accent-sm" />
            <p className="text-xl text-text-sub max-w-2xl font-medium leading-relaxed italic">
              {resumeData.summary}
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-6"
          >
            <a
              href="#portfolio"
              className="group flex items-center gap-3 px-8 py-5 rounded-xl bg-accent text-white font-black text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-accent-sm"
            >
              View Portfolio
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={resumeData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-5 rounded-xl bg-bg-sub/50 border border-border-main text-text-main font-black text-xs uppercase tracking-widest hover:bg-accent/5 hover:border-accent transition-all"
            >
              Download Resume
              <Download className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${resumeData.contact.email}`}
              className="w-14 h-14 rounded-xl bg-bg-sub/50 border border-border-main flex items-center justify-center text-text-main hover:border-accent hover:text-accent transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Right Content: Circular Image Layout with Neon Animations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative flex justify-center items-center h-[500px]"
        >
          {/* Neon Rotating Borders */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Outer dotted ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className={`absolute w-[110%] aspect-square rounded-full border border-dashed transition-colors duration-500 ${mode === 'dark' ? 'border-white/[0.05]' : 'border-accent/10'}`}
            />
            {/* Middle dotted ring */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className={`absolute w-[125%] aspect-square rounded-full border border-dotted transition-colors duration-500 ${mode === 'dark' ? 'border-white/[0.03]' : 'border-accent/5'}`}
            />
            {/* Inner accent ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-[105%] aspect-square rounded-full border-2 border-accent/20 border-t-accent/60 opacity-40 blur-[1px]"
            />

            {/* Float Experience Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className={`absolute -bottom-6 -right-[20%] p-5 rounded-2xl border backdrop-blur-xl shadow-2xl transition-colors duration-500 min-w-[180px] z-20 ${mode === 'dark' ? 'bg-bg-sub/80 border-white/10' : 'bg-white/80 border-accent/20'}`}
            >
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-accent">Professional Experience</span>
                <p className="text-sm font-bold text-text-main leading-tight">
                  {resumeData.professionalExperiences[0].role}
                </p>
                <p className="text-[11px] font-medium text-text-sub">
                  {resumeData.professionalExperiences[0].organization}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Inner Circular Image Container */}
          <div className={`relative w-full max-w-[420px] aspect-square rounded-full p-6 border transition-colors duration-500 bg-gradient-to-br from-accent/5 to-transparent backdrop-blur-xl group ${mode === 'dark' ? 'border-white/10' : 'border-accent/20'}`}>
            {/* Extra Glow effect behind image */}
            <div className="absolute inset-4 rounded-full bg-accent/5 blur-3xl group-hover:bg-accent/10 transition-colors" />
            
            <div className={`w-full h-full rounded-full overflow-hidden border-2 transition-colors duration-500 shadow-2xl relative ${mode === 'dark' ? 'border-white/20' : 'border-accent/30'}`}>
              <img
                src={resumeData.profileImage}
                alt={resumeData.name}
                className="w-full h-full object-cover scale-110 transition-transform duration-700 group-hover:scale-125"
                style={{ objectPosition: '50% 25%' }}
              />
              {/* Radial Fade Overlay */}
              <div className={`absolute inset-0 pointer-events-none transition-colors duration-500 ${mode === 'dark' ? 'bg-radial-gradient from-transparent to-black/50' : 'bg-radial-gradient from-transparent to-white/30'}`} />
              
              {/* Scanline effect */}
              <div className="absolute inset-0 bg-scanline pointer-events-none opacity-20" />
            </div>

            {/* Orbiting particles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ rotate: 360 }}
                transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 pointer-events-none"
              >
                <div 
                  className="w-2 h-2 rounded-full bg-accent shadow-accent-sm"
                  style={{ 
                    position: 'absolute', 
                    top: '-5px', 
                    left: '50%', 
                    transform: 'translateX(-50%)' 
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

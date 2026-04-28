import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeData } from '../data/resumeData';

export const Skills: React.FC = () => {
  const categories = ['All', 'Programming', 'CAD/CAE', 'Manufacturing', 'Soft', 'Additional'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All' 
    ? resumeData.skills.flatMap(cat => cat.skills)
    : resumeData.skills.find(cat => cat.category === activeCategory)?.skills || [];

  return (
    <section id="skills" className="py-32 px-6 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter">Skills & <span className="text-accent">Expertise.</span></h2>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-500 border ${
                activeCategory === cat 
                  ? 'bg-accent text-white border-accent shadow-accent-sm' 
                  : 'bg-bg-sub/40 backdrop-blur-md text-text-sub border-border-main hover:border-accent/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 gap-x-16 gap-y-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="group"
              >
                <div className="flex justify-between items-end mb-4">
                  <div className="flex flex-col">
                    <span className="text-xl font-black text-text-main group-hover:text-accent transition-colors tracking-tight">
                      {skill.name}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-accent">
                      {skill.level}%
                    </span>
                  </div>
                </div>
                <div className="h-4 bg-bg-sub/50 rounded-full overflow-hidden border border-border-main p-[3px] relative transition-colors duration-500">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    className="h-full bg-accent rounded-full relative overflow-hidden"
                  >
                    <motion.div 
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />
                  </motion.div>
                  {/* Tick Marks */}
                  <div className="absolute inset-0 flex justify-between px-4 pointer-events-none opacity-20">
                    {[...Array(10)].map((_, i) => (
                      <div key={i} className="w-[1px] h-full bg-text-main" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

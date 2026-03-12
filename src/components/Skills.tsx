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
    <section id="skills" className="py-24 px-6 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-black mb-4">Skills & Expertise</h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1 bg-accent mx-auto rounded-full" 
          />
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-2xl text-sm font-bold transition-all border ${
                activeCategory === cat 
                  ? 'bg-accent text-white border-accent shadow-accent-sm' 
                  : 'bg-bg-main text-text-sub border-border-main hover:border-accent/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 gap-x-12 gap-y-8"
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
                <div className="flex justify-between items-end mb-3">
                  <span className="text-lg font-bold text-text-main group-hover:text-accent transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-xs font-mono font-bold text-accent">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-3 bg-bg-main rounded-full overflow-hidden border border-border-main p-[2px]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="h-full bg-accent rounded-full relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

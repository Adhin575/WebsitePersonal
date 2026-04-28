import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, Target, BookOpen } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-32 px-6 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-accent font-mono text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Academic Foundation</span>
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter italic">Educational <span className="text-accent">Background.</span></h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {resumeData.education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-accent/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[3rem]" />
              
              <div className="relative bg-bg-sub/40 backdrop-blur-xl p-10 md:p-12 rounded-[3rem] border border-border-main hover:border-accent/40 transition-all duration-500 overflow-hidden h-full">
                {/* Blueprint Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
                     style={{ backgroundImage: 'linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="p-4 bg-accent/10 rounded-2xl text-accent group-hover:scale-110 transition-transform">
                        <GraduationCap size={28} />
                      </div>
                      <div>
                        <p className="text-accent font-mono text-[10px] uppercase tracking-[0.3em] mb-1">Academic Cycle</p>
                        <p className="text-text-main font-black text-lg tracking-tight">{edu.duration}</p>
                      </div>
                    </div>
                    {edu.gpa && (
                      <div className="text-right">
                        <p className="text-accent font-mono text-[10px] uppercase tracking-[0.3em] mb-1">Performance</p>
                        <p className="text-text-main font-black text-2xl tracking-tighter">GPA: {edu.gpa}</p>
                      </div>
                    )}
                  </div>

                  <h3 className="text-3xl font-black text-text-main mb-3 group-hover:text-accent transition-colors tracking-tight leading-tight">
                    {edu.degree}
                  </h3>
                  <p className="text-xl font-bold text-text-sub mb-10 flex items-center gap-2">
                    <Target size={18} className="text-accent/40" />
                    {edu.institution}
                  </p>

                  {edu.highlights && (
                    <div className="space-y-6">
                      <p className="text-accent font-mono text-[10px] uppercase tracking-[0.3em] border-b border-accent/10 pb-2 mb-4">Core Competencies & Achievements</p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {edu.highlights.map((highlight) => (
                          <div 
                            key={highlight}
                            className="flex items-start gap-3 text-text-sub text-sm font-medium group/item"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 group-hover/item:scale-150 transition-transform" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-12 pt-8 border-t border-border-main flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-text-sub uppercase tracking-widest">
                      <BookOpen size={14} className="text-accent/40" />
                      Technical Curriculum
                    </div>
                    <div className="w-12 h-1 bg-accent/10 rounded-full group-hover:w-24 transition-all duration-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

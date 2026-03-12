import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 bg-transparent overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-black mb-4">Education</h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1 bg-accent mx-auto rounded-full" 
          />
        </motion.div>

        <div className="relative space-y-12">
          {/* Timeline line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-0 md:left-1/2 top-0 w-0.5 bg-border-main -translate-x-1/2 hidden md:block" 
          />

          {resumeData.education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className={`relative flex flex-col md:flex-row items-center gap-8 ${
                i % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Node */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full bg-accent timeline-glow -translate-x-1/2 z-10 hidden md:block border-4 border-bg-main" 
              />

              <div className="w-full md:w-1/2">
                <motion.div 
                  whileHover={{ y: -5, borderColor: "var(--color-accent)" }}
                  className="bg-bg-main p-8 rounded-[2.5rem] border border-border-main hover:shadow-accent-sm transition-all group"
                >
                  <div className="flex items-center gap-3 text-accent mb-4">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <GraduationCap size={20} />
                    </div>
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.2em]">
                      {edu.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-black mb-2 group-hover:text-accent transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-lg font-bold text-text-sub mb-6">
                    {edu.institution}
                  </p>

                  {edu.highlights && (
                    <motion.ul 
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: { staggerChildren: 0.1, delayChildren: 0.3 }
                        }
                      }}
                      className="space-y-3"
                    >
                      {edu.highlights.map((highlight) => (
                        <motion.li 
                          key={highlight}
                          variants={{
                            hidden: { opacity: 0, x: -10 },
                            visible: { opacity: 1, x: 0 }
                          }}
                          className="flex items-start gap-3 text-text-sub text-sm"
                        >
                          <Award size={16} className="text-accent shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}

                  {edu.gpa && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="mt-6 pt-6 border-t border-border-main"
                    >
                      <span className="text-sm font-bold text-accent">GPA: {edu.gpa}</span>
                    </motion.div>
                  )}
                </motion.div>
              </div>
              <div className="hidden md:block w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

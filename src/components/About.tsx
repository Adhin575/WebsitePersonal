import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-black mb-4">About Me</h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1 bg-accent mx-auto rounded-full" 
          />
        </motion.div>

        <div className="grid md:grid-cols-1 gap-12">
          <div className="space-y-12">
            <div className="relative px-8 md:px-12">
              {/* Left Boundary Line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-accent to-transparent opacity-50" />
              {/* Right Boundary Line */}
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-accent to-transparent opacity-50" />
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-text-sub leading-relaxed text-justify"
              >
                {resumeData.about}
              </motion.p>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {resumeData.strengths.map((strength, i) => (
                <motion.div
                  key={strength}
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1 }
                  }}
                  whileHover={{ 
                    scale: 1.02, 
                    borderColor: "var(--color-accent)",
                    transition: { duration: 0.2 }
                  }}
                  className="flex items-start gap-4 p-6 bg-bg-main rounded-3xl border border-border-main hover:shadow-accent-sm transition-all"
                >
                  <div className="p-2 bg-accent/10 rounded-xl text-accent">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-bold text-text-main">{strength}</span>
                </motion.div>
              ))}
            </motion.div>

              {resumeData.philosophy && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, type: "spring" }}
                  className="mt-16 p-8 border-l-4 border-accent bg-accent/5 rounded-r-2xl italic text-lg text-text-sub relative group"
                >
                  <div className="absolute -top-4 -left-4 text-6xl text-accent/10 font-display opacity-0 group-hover:opacity-100 transition-opacity">"</div>
                  "{resumeData.philosophy}"
                </motion.div>
              )}
          </div>
        </div>
      </div>
    </section>
  );
};

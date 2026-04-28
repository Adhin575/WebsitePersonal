import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-8 italic uppercase leading-none">About <br /><span className="text-accent">Me.</span></h2>
            
            <div className="relative p-8 md:p-12 bg-bg-sub/40 backdrop-blur-xl rounded-[2rem] border border-border-main overflow-hidden group transition-colors duration-500">
              <div className="absolute top-0 left-0 w-2 h-full bg-accent opacity-50 group-hover:opacity-100 transition-opacity" />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-text-sub leading-relaxed font-medium"
              >
                {resumeData.about}
              </motion.p>
            </div>

            {resumeData.philosophy && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-12 flex items-center gap-6 p-6 bg-bg-sub/20 rounded-3xl border border-border-main transition-colors duration-500"
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                  <CheckCircle2 size={24} />
                </div>
                <p className="italic text-lg text-text-main font-serif">
                  "{resumeData.philosophy}"
                </p>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {resumeData.strengths.map((strength, i) => (
              <motion.div
                key={strength}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                whileHover={{ y: -5 }}
                className="p-8 bg-bg-sub/60 backdrop-blur-md rounded-[2rem] border border-border-main hover:border-accent hover:bg-accent/[0.08] transition-all duration-500 group cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="text-lg font-black text-text-main mb-2 tracking-tight">{strength}</h3>
                <div className="w-8 h-1 bg-accent/20 rounded-full group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}

            {/* Technical Specs Card removed as per 'RE&T column' request */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

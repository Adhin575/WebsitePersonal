import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Megaphone, Calendar } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const ProfessionalExperiences: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'aaeio': return Megaphone;
      case 'agso': return Users;
      case 'ta': return BookOpen;
      default: return Users;
    }
  };

  return (
    <section id="professional-experiences" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-black mb-4 uppercase tracking-tight">Professional Experiences</h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1 bg-accent mx-auto rounded-full" 
          />
        </motion.div>

        <div className="grid gap-8">
          {resumeData.professionalExperiences.map((item, index) => {
            const Icon = getIcon(item.id);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-bg-main p-8 md:p-10 rounded-[2.5rem] border border-border-main hover:border-accent/40 transition-all hover:shadow-accent-sm"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="p-5 bg-accent/10 rounded-2xl text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 shrink-0">
                    <Icon size={32} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-text-main mb-2 group-hover:text-accent transition-colors">
                          {item.role}
                        </h3>
                        <p className="text-accent font-mono text-sm font-bold uppercase tracking-wider">
                          {item.organization}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-bg-sub rounded-full border border-border-main text-text-sub text-xs font-bold shrink-0">
                        <Calendar size={14} className="text-accent" />
                        {item.duration}
                      </div>
                    </div>
                    
                    <p className="text-text-sub leading-relaxed text-lg border-l-2 border-accent/20 pl-6 italic">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Decorative background element */}
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity pointer-events-none">
                  <Icon size={120} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

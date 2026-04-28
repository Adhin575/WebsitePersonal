import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Megaphone, Calendar, ShieldCheck, Cpu, Rocket } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const ProfessionalExperiences: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'aaeio': return Megaphone;
      case 'agso': return Users;
      case 'ta': return BookOpen;
      default: return Cpu;
    }
  };

  return (
    <section id="professional-experiences" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-accent font-mono text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Operational History</span>
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter">Professional <span className="text-accent">Experience.</span></h2>
        </motion.div>

        <div className="grid gap-10">
          {resumeData.professionalExperiences.map((item, index) => {
            const Icon = getIcon(item.id);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-bg-sub/40 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] border border-border-main hover:border-accent/40 transition-all duration-500 hover:shadow-accent-sm overflow-hidden"
              >
                {/* Technical Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                     style={{ backgroundImage: 'radial-gradient(var(--color-accent) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                
                <div className="flex flex-col lg:flex-row gap-10 items-start relative z-10">
                  <div className="relative">
                    <div className="p-6 bg-accent/10 rounded-[2rem] text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 shrink-0 relative z-10">
                      <Icon size={40} />
                    </div>
                    <div className="absolute -inset-4 bg-accent/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest border border-accent/20">
                            Exp Ref: {item.id.toUpperCase()}
                          </span>
                          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        </div>
                        <h3 className="text-3xl font-black text-text-main group-hover:text-accent transition-colors tracking-tight">
                          {item.role}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <p className="text-accent font-mono text-sm font-bold uppercase tracking-[0.2em]">
                            {item.organization}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 px-6 py-3 bg-bg-sub/80 rounded-2xl border border-border-main text-text-main text-sm font-black tracking-tight shrink-0 shadow-sm transition-colors duration-500">
                        <Calendar size={16} className="text-accent" />
                        {item.duration}
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent/20 rounded-full" />
                      <p className="text-text-sub leading-relaxed text-xl pl-8 font-medium">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4 pl-8">
                      {["Leadership", "Technical Strategy", "Collaboration"].map((tag) => (
                        <div key={tag} className="flex items-center gap-2 text-[10px] font-mono text-accent/60 uppercase tracking-widest">
                          <ShieldCheck size={12} />
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative background element */}
                <div className="absolute -bottom-10 -right-10 opacity-[0.02] group-hover:opacity-[0.05] transition-all duration-700 group-hover:scale-110 pointer-events-none rotate-12">
                  <Icon size={300} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

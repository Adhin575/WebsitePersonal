import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { GraduationCap, Briefcase, Rocket } from 'lucide-react';

export const Timeline = () => {
  const events = resumeData.education
    .filter(edu => 
      edu.institution.includes("University of Colorado") || 
      edu.institution.includes("Shiv Nadar")
    )
    .map(edu => ({
      type: 'education',
      title: edu.degree,
      subtitle: edu.institution,
      date: edu.duration,
      icon: <GraduationCap className="w-5 h-5" />,
      highlights: edu.highlights
    }))
    .sort((a, b) => {
      const yearA = parseInt(a.date.match(/\d{4}/g)?.pop() || '0');
      const yearB = parseInt(b.date.match(/\d{4}/g)?.pop() || '0');
      return yearB - yearA;
    });

  return (
    <div className="relative py-20 px-6">
      <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-border-main" />
      
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-8 md:gap-12 pl-0 md:pl-4"
          >
            {/* Icon */}
            <div className="relative z-10 w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-white shadow-accent-sm shrink-0 mt-2">
              {event.icon}
            </div>

            {/* Content */}
            <div className="flex-1 w-full">
              <div className="bg-bg-sub/40 backdrop-blur-xl p-8 rounded-[2rem] border border-border-main hover:border-accent/50 transition-all duration-500 group">
                <span className="text-accent font-mono text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
                  {event.date}
                </span>
                <h3 className="text-2xl font-display font-black mb-2 group-hover:text-accent transition-colors tracking-tight italic">
                  {event.title}
                </h3>
                <p className="text-lg text-text-sub font-black mb-6 uppercase tracking-wider text-sm">{event.subtitle}</p>
                <ul className="text-text-sub space-y-3">
                  {event.highlights?.slice(0, 3).map((h, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0 animate-pulse" />
                      <span className="font-medium leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

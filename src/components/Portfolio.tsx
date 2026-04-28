import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter, ChevronRight, Play, Info } from 'lucide-react';
import { resumeData, Project } from '../data/resumeData';
import { ProjectModal } from './ProjectModal';

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = resumeData.projects;

  return (
    <section id="portfolio" className="py-32 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 -right-1/4 w-[50vw] h-[50vw] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-display font-black tracking-tighter leading-none"
            >
              Project <span className="text-accent">Portfolio.</span>
            </motion.h2>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative bg-bg-sub/40 backdrop-blur-xl rounded-[2.5rem] border border-border-main overflow-hidden hover:border-accent/50 transition-all duration-500 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden group/media">
                    <motion.img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-accent/20 backdrop-blur-[2px]">
                      <div className="flex flex-col items-center gap-4">
                        <div className="p-4 rounded-full bg-accent text-white shadow-2xl scale-75 group-hover:scale-100 transition-transform">
                          <ChevronRight className="w-8 h-8" />
                        </div>
                        <span className="text-white font-black text-xs uppercase tracking-widest">View Project</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-display font-black mb-3 tracking-tighter group-hover:text-accent transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-text-sub text-sm line-clamp-2 mb-6 font-medium leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-[10px] font-mono font-bold uppercase tracking-widest text-text-sub px-2 py-1 rounded-md bg-bg-sub border border-border-main transition-colors duration-500">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-[10px] font-mono font-bold text-accent">+ {project.technologies.length - 3}</span>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-border-main">
                      <span className="text-xs font-bold text-text-sub uppercase tracking-widest">{project.role}</span>
                      <div className="flex gap-4">
                        {project.attachments.github && <Github className="w-5 h-5 text-text-sub hover:text-accent transition-colors" />}
                        <Info className="w-5 h-5 text-text-sub hover:text-accent transition-colors" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>


        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal 
              project={selectedProject} 
              onClose={() => setSelectedProject(null)} 
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

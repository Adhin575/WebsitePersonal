import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, FileText, Presentation, Image as ImageIcon, Download, X, Calendar, User, Cpu, ArrowRight, Github } from 'lucide-react';
import { resumeData, Project } from '../data/resumeData';

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-black mb-4">Technical Portfolio</h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1 bg-accent mx-auto rounded-full" 
          />
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {resumeData.projects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9, rotateX: 15 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  rotateX: 0,
                  transition: { type: "spring", damping: 12, stiffness: 100 }
                }
              }}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-bg-main rounded-[2rem] overflow-hidden cursor-pointer border border-border-main hover:border-accent/40 transition-all hover:shadow-accent perspective-1000"
            >
              {/* Card Image */}
              <div className="relative h-64 overflow-hidden m-3 rounded-[1.5rem]">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={project.thumbnail}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-main/20 to-transparent" />
              </div>

              <div className="p-8 pt-4">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-mono font-bold text-accent uppercase tracking-[0.2em]">
                    {project.role}
                  </span>
                </div>
                
                <h3 className="text-2xl font-display font-black mb-4 group-hover:text-accent transition-colors leading-tight">
                  {project.title.split(":")[0]}
                </h3>
                
                <p className="text-text-sub text-sm line-clamp-3 mb-8 leading-relaxed font-medium">
                  {project.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2 text-accent font-bold text-sm group/link">
                    <span>View Project</span>
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </div>
                  
                  {/* Decorative Dots */}
                  <div className="grid grid-cols-3 gap-1 opacity-20 group-hover:opacity-40 transition-opacity">
                    {[...Array(9)].map((_, idx) => (
                      <div key={idx} className="w-1 h-1 rounded-full bg-text-main" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40, rotateX: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40, rotateX: 10 }}
              transition={{ type: "spring", damping: 20, stiffness: 120 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-bg-main rounded-[3rem] overflow-hidden flex flex-col shadow-2xl border border-border-main"
            >
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 p-3 rounded-full bg-bg-sub hover:text-accent transition-colors z-20"
              >
                <X size={24} />
              </motion.button>

              <div className="overflow-y-auto p-8 md:p-12 custom-scrollbar">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex flex-wrap items-center gap-4 mb-8">
                    <span className="px-4 py-1.5 bg-accent/10 text-accent rounded-full text-xs font-bold uppercase tracking-widest">
                      {selectedProject.duration}
                    </span>
                    <div className="flex items-center gap-2 text-text-sub text-sm">
                      <User size={16} />
                      <span>{selectedProject.role}</span>
                    </div>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-display font-black mb-8 leading-tight">
                    {selectedProject.title}
                  </h2>

                  <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-10">
                      <section>
                        <h4 className="text-xs font-mono font-bold text-accent uppercase tracking-[0.3em] mb-4">Overview</h4>
                        <p className="text-text-sub leading-relaxed text-lg">
                          {selectedProject.description}
                        </p>
                      </section>
                      <section>
                        <h4 className="text-xs font-mono font-bold text-accent uppercase tracking-[0.3em] mb-4">Impact & Results</h4>
                        <p className="text-text-sub leading-relaxed text-lg">
                          {selectedProject.impact}
                        </p>
                      </section>

                      {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                        <section>
                          <h4 className="text-xs font-mono font-bold text-accent uppercase tracking-[0.3em] mb-4">Gallery</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {selectedProject.gallery.map((item, idx) => (
                              <motion.div
                                key={idx}
                                whileHover={{ scale: 1.02 }}
                                className="relative aspect-video rounded-2xl overflow-hidden border border-border-main bg-bg-sub"
                              >
                                {item.type === 'image' ? (
                                  <img
                                    src={item.url}
                                    alt={`${selectedProject.title} gallery ${idx + 1}`}
                                    referrerPolicy="no-referrer"
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <video
                                    src={item.url}
                                    controls
                                    className="w-full h-full object-cover"
                                  />
                                )}
                              </motion.div>
                            ))}
                          </div>
                        </section>
                      )}
                    </div>

                    <div className="space-y-10">
                      <section>
                        <h4 className="text-xs font-mono font-bold text-accent uppercase tracking-[0.3em] mb-4">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech) => (
                            <motion.span 
                              key={tech} 
                              whileHover={{ scale: 1.1, color: "var(--color-accent)" }}
                              className="px-4 py-2 bg-bg-sub text-text-main border border-border-main rounded-full text-[10px] font-bold uppercase tracking-wider cursor-default"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </section>

                      {(selectedProject.attachments.pdf || selectedProject.attachments.presentation || selectedProject.attachments.github) && (
                        <section>
                          <h4 className="text-xs font-mono font-bold text-accent uppercase tracking-[0.3em] mb-4">Resources</h4>
                          <div className="grid gap-3">
                            {selectedProject.attachments.pdf && (
                              <motion.a 
                                href={selectedProject.attachments.pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-3 p-4 rounded-2xl border border-border-main hover:border-accent transition-all group w-full text-left"
                              >
                                <FileText size={20} className="text-accent" />
                                <span className="text-sm font-medium">{selectedProject.attachments.pdfLabel || "Technical Report"}</span>
                              </motion.a>
                            )}
                            {selectedProject.attachments.presentation && (
                              <motion.a 
                                href={selectedProject.attachments.presentation}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-3 p-4 rounded-2xl border border-border-main hover:border-accent transition-all group w-full text-left"
                              >
                                <Presentation size={20} className="text-accent" />
                                <span className="text-sm font-medium">{selectedProject.attachments.presentationLabel || "Presentation Deck"}</span>
                              </motion.a>
                            )}
                            {selectedProject.attachments.github && (
                              <motion.a 
                                href={selectedProject.attachments.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-3 p-4 rounded-2xl border border-border-main hover:border-accent transition-all group w-full text-left"
                              >
                                <Github size={20} className="text-accent" />
                                <span className="text-sm font-medium">GitHub Repository</span>
                              </motion.a>
                            )}
                          </div>
                        </section>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

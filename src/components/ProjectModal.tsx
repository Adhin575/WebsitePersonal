import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, ChevronLeft, ChevronRight, ZoomIn, Target, CheckCircle2, Layout, FileText, Presentation, Download, Code } from 'lucide-react';
import { Project } from '../data/resumeData';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'results' | 'techStack' | 'resources'>('overview');
  const [isZoomed, setIsZoomed] = useState(false);

  const nextItem = () => {
    if (project.gallery) {
      setCurrentGalleryIndex((prev) => (prev + 1) % project.gallery!.length);
      setIsZoomed(false);
    }
  };

  const prevItem = () => {
    if (project.gallery) {
      setCurrentGalleryIndex((prev) => (prev - 1 + project.gallery!.length) % project.gallery!.length);
      setIsZoomed(false);
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <Target className="w-4 h-4" /> },
    { id: 'results', label: 'Results', icon: <CheckCircle2 className="w-4 h-4" /> },
    { id: 'techStack', label: 'Tech Stack', icon: <Code className="w-4 h-4" /> },
    { id: 'resources', label: 'Resources', icon: <FileText className="w-4 h-4" /> },
  ];

  const currentItem = project.gallery ? project.gallery[currentGalleryIndex] : null;

  const renderTabContent = () => {
    if (activeTab === 'results') {
      return (
        <div className="flex flex-col gap-6">
          <p className="text-text-sub leading-relaxed text-lg font-medium">
            {project.technicalDetails?.results || 'Results and outcomes of the project will be detailed here.'}
          </p>
          <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-accent" />
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-accent mb-3">Mission Impact</h4>
            <p className="text-text-main font-bold text-lg leading-snug italic tracking-tight">
              "{project.impact}"
            </p>
          </div>
        </div>
      );
    }

    if (activeTab === 'techStack') {
      return (
        <div className="flex flex-col gap-6">
          <p className="text-text-sub leading-relaxed text-lg font-medium">
            {project.technicalDetails?.techStack || 'Detailed technical stack and implementation specifics.'}
          </p>
          <div>
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-text-sub mb-4 border-b border-border-main/50 pb-2">Technical Core</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span key={i} className="px-3 py-1.5 rounded-lg bg-accent/5 border border-accent/10 text-accent text-[10px] font-mono font-bold">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === 'resources') {
      const hasAttachments = project.attachments.pdf || project.attachments.presentation || project.attachments.github || project.attachments.publication;
      
      return (
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-accent mb-2">Downloadable Documents</h4>
          {!hasAttachments && <p className="text-text-sub italic">No additional resources available for this project yet.</p>}
          
          <div className="grid grid-cols-1 gap-3">
            {project.attachments.pdf && (
              <a 
                href={project.attachments.pdf} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-accent/5 border border-accent/20 hover:bg-accent/10 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-accent" />
                  <span className="text-sm font-bold text-text-main">{project.attachments.pdfLabel || 'Technical Report (PDF)'}</span>
                </div>
                <Download className="w-4 h-4 text-text-sub group-hover:text-accent group-hover:translate-y-0.5 transition-all" />
              </a>
            )}
            {project.attachments.presentation && (
              <a 
                href={project.attachments.presentation} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-accent/5 border border-accent/20 hover:bg-accent/10 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Presentation className="w-5 h-5 text-accent" />
                  <span className="text-sm font-bold text-text-main">{project.attachments.presentationLabel || 'Presentation (PPT)'}</span>
                </div>
                <Download className="w-4 h-4 text-text-sub group-hover:text-accent group-hover:translate-y-0.5 transition-all" />
              </a>
            )}
            {project.attachments.github && (
              <a 
                href={project.attachments.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-accent/5 border border-accent/20 hover:bg-accent/10 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-accent" />
                  <span className="text-sm font-bold text-text-main">Repository / Source</span>
                </div>
                <ExternalLink className="w-4 h-4 text-text-sub group-hover:text-accent transition-all" />
              </a>
            )}
            {project.attachments.publication && (
              <a 
                href={project.attachments.publication} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-accent/5 border border-accent/20 hover:bg-accent/10 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Layout className="w-5 h-5 text-accent" />
                  <span className="text-sm font-bold text-text-main">Scientific Publication</span>
                </div>
                <ExternalLink className="w-4 h-4 text-text-sub group-hover:text-accent transition-all" />
              </a>
            )}
          </div>
        </div>
      );
    }

    return (
      <p className="text-text-sub leading-relaxed text-lg font-medium">
        {project.technicalDetails?.overview || project.description}
      </p>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-bg-main/95 backdrop-blur-3xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="relative w-full max-w-7xl max-h-[95vh] bg-bg-main border border-border-main rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-8 right-8 z-50 p-4 rounded-full bg-bg-main/50 backdrop-blur-md border border-border-main hover:bg-accent hover:text-white transition-all shadow-lg"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Left Side: Visuals */}
        <div className="w-full lg:w-3/5 h-[45vh] lg:h-auto relative bg-bg-secondary flex items-center justify-center overflow-hidden group">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentGalleryIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ 
                opacity: 1, 
                scale: isZoomed ? 1.5 : 1 
              }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full cursor-zoom-in"
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <img
                src={currentItem?.url || project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              
               {/* Caption Overlay */}
               {currentItem?.caption && (
                 <div className="absolute bottom-20 left-0 w-full p-6 bg-gradient-to-t from-bg-main/90 to-transparent text-text-main pointer-events-none transition-colors duration-500">
                   <p className="text-sm font-mono font-bold uppercase tracking-widest">{currentItem.caption}</p>
                 </div>
               )}
            </motion.div>
          </AnimatePresence>

          {/* Gallery Controls */}
          {project.gallery && project.gallery.length > 1 && (
            <>
               <button
                 onClick={prevItem}
                 className="absolute left-6 p-3 rounded-full bg-bg-sub/40 backdrop-blur-xl border border-border-main hover:bg-accent hover:text-white transition-all opacity-0 group-hover:opacity-100 z-10 duration-500"
               >
                 <ChevronLeft className="w-6 h-6" />
               </button>
               <button
                 onClick={nextItem}
                 className="absolute right-6 p-3 rounded-full bg-bg-sub/40 backdrop-blur-xl border border-border-main hover:bg-accent hover:text-white transition-all opacity-0 group-hover:opacity-100 z-10 duration-500"
               >
                 <ChevronRight className="w-6 h-6" />
               </button>
               <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                 {project.gallery.map((_, i) => (
                   <button
                     key={i}
                     onClick={() => { setCurrentGalleryIndex(i); setIsZoomed(false); }}
                     className={`w-3 h-3 rounded-full transition-all flex items-center justify-center ${
                       i === currentGalleryIndex ? 'bg-accent w-10' : 'bg-text-sub/30 hover:bg-text-sub/50'
                     }`}
                   />
                 ))}
               </div>
            </>
          )}

           {isZoomed === false && (
             <div className="absolute bottom-8 right-8 p-3 rounded-xl bg-bg-sub/40 backdrop-blur-xl border border-border-main text-text-sub pointer-events-none transition-colors duration-500">
               <ZoomIn className="w-5 h-5" />
             </div>
           )}
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-2/5 p-10 lg:p-16 overflow-y-auto custom-scrollbar bg-bg-main/50">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-black mb-4 tracking-tighter leading-[0.9] italic">
              {project.title}
            </h2>
            <div className="flex items-center gap-4 text-text-sub font-mono text-xs font-bold uppercase tracking-widest">
              <span>{project.role}</span>
              <span className="w-1 h-1 rounded-full bg-border-main" />
              <span>{project.duration}</span>
            </div>
          </div>

          {/* Technical Tabs */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 mb-8 p-1.5 bg-bg-main/80 rounded-[1.5rem] border border-border-main">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    activeTab === tab.id 
                      ? 'bg-accent text-white shadow-accent-sm' 
                      : 'text-text-sub hover:bg-accent/5 hover:text-accent'
                  }`}
                >
                  {tab.icon}
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-bg-main/60 p-8 rounded-[2rem] border border-border-main min-h-[180px] relative"
              >
                <div className="absolute top-4 right-4 opacity-10">
                  {tabs.find(t => t.id === activeTab)?.icon}
                </div>
                {renderTabContent()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Direct Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            {project.attachments.github && (
              <a
                href={project.attachments.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-bg-main border border-border-main hover:border-accent hover:text-accent transition-all font-black text-sm uppercase tracking-widest"
              >
                <Github className="w-5 h-5" />
                Repository
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

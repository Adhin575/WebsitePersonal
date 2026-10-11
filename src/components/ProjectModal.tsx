
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {
  X,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Target,
  CheckCircle2,
  FileText,
  Presentation,
  Layout,
  Play
} from 'lucide-react';

import type { Project } from '../data/resumeData';

// ============================================================
// TYPES AND INTERFACES
// ============================================================

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

type ProjectTab = 'overview' | 'results' | 'resources';

interface ProjectResource {
  label: string;
  url: string;
  icon: React.ReactNode;
}

// ============================================================
// PROJECT MODAL COMPONENT
// ============================================================

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose
}) => {
  // ----------------------------------------------------------
  // STATE MANAGEMENT
  // ----------------------------------------------------------

  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  const [activeTab, setActiveTab] = useState<ProjectTab>('overview');

  const [isZoomed, setIsZoomed] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const gallery = project.gallery || [];

  const currentItem = gallery[currentGalleryIndex] || null;

  // ----------------------------------------------------------
  // PROJECT RESET
  // ----------------------------------------------------------

  useEffect(() => {
    setCurrentGalleryIndex(0);
    setActiveTab('overview');
    setIsZoomed(false);
  }, [project.id]);

  // ----------------------------------------------------------
  // VIDEO CLEANUP
  // ----------------------------------------------------------

  useEffect(() => {
    const video = videoRef.current;

    return () => {
      video?.pause();
    };
  }, [currentGalleryIndex, project.id]);

  // ----------------------------------------------------------
  // GALLERY NAVIGATION
  // ----------------------------------------------------------

  const changeGalleryItem = (index: number) => {
    videoRef.current?.pause();

    setCurrentGalleryIndex(index);
    setIsZoomed(false);
  };

  const nextItem = () => {
    if (gallery.length > 1) {
      changeGalleryItem(
        (currentGalleryIndex + 1) % gallery.length
      );
    }
  };

  const prevItem = () => {
    if (gallery.length > 1) {
      changeGalleryItem(
        (currentGalleryIndex - 1 + gallery.length) %
          gallery.length
      );
    }
  };

  // ----------------------------------------------------------
  // CLOSE PROJECT WINDOW
  // ----------------------------------------------------------

  const handleClose = () => {
    videoRef.current?.pause();
    onClose();
  };

  // ----------------------------------------------------------
  // RESOURCE DETECTION
  // ----------------------------------------------------------

  const getResources = (): ProjectResource[] => {
    const attachments = project.attachments || {};

    const resources: ProjectResource[] = [];

    if (attachments.pdf) {
      resources.push({
        label: attachments.pdfLabel || 'Technical Report (PDF)',
        url: attachments.pdf,
        icon: <FileText className="w-5 h-5" />
      });
    }

    if (attachments.pdf1) {
      resources.push({
        label: attachments.pdfLabel || 'Publication 1',
        url: attachments.pdf1,
        icon: <FileText className="w-5 h-5" />
      });
    }

    if (attachments.pdf2) {
      resources.push({
        label: attachments.pdfLabel2 || 'Publication 2',
        url: attachments.pdf2,
        icon: <FileText className="w-5 h-5" />
      });
    }

    if (attachments.presentation) {
      resources.push({
        label:
          attachments.presentationLabel ||
          'Project Presentation',
        url: attachments.presentation,
        icon: <Presentation className="w-5 h-5" />
      });
    }

    if (attachments.github) {
      resources.push({
        label: 'GitHub Repository',
        url: attachments.github,
        icon: <Github className="w-5 h-5" />
      });
    }

    if (attachments.publication) {
      resources.push({
        label: 'Scientific Publication',
        url: attachments.publication,
        icon: <Layout className="w-5 h-5" />
      });
    }

    return resources;
  };

  const resources = getResources();

  const hasResources = resources.length > 0;

  // ----------------------------------------------------------
  // DYNAMIC PROJECT TABS
  // ----------------------------------------------------------

  const tabs: {
    id: ProjectTab;
    label: string;
    icon: React.ReactNode;
  }[] = [
    {
      id: 'overview',
      label: 'Overview',
      icon: <Target className="w-4 h-4" />
    },
    {
      id: 'results',
      label: 'Results',
      icon: <CheckCircle2 className="w-4 h-4" />
    },
    ...(hasResources
      ? [
          {
            id: 'resources' as ProjectTab,
            label: 'Resources',
            icon: <FileText className="w-4 h-4" />
          }
        ]
      : [])
  ];

  // ----------------------------------------------------------
  // RENDER PROJECT TAB CONTENT
  // ----------------------------------------------------------

  const renderTabContent = () => {
    // ========================================================
    // OVERVIEW TAB
    // ========================================================

    if (activeTab === 'overview') {
      return (
        <div className="flex flex-col gap-5">

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
              <Target className="w-5 h-5 text-accent" />
            </div>

            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-accent">
              Project Overview
            </h4>
          </div>

          <div className="relative pl-5 py-1">
            <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-accent" />

            <p className="text-text-sub leading-relaxed text-base lg:text-lg font-medium whitespace-pre-line break-words">
              {project.technicalDetails?.overview ||
                project.technicalDetails?.contribution ||
                project.description}
            </p>
          </div>

        </div>
      );
    }

    // ========================================================
    // RESULTS TAB
    // ========================================================

    if (activeTab === 'results') {
      return (
        <div className="flex flex-col gap-6">

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5 text-accent" />
            </div>

            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-accent">
              Results & Outcomes
            </h4>
          </div>

          <div className="relative pl-5 py-1">
            <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-accent" />

            <p className="text-text-sub leading-relaxed text-base lg:text-lg font-medium whitespace-pre-line break-words">
              {project.technicalDetails?.results ||
                'Project results will be added here.'}
            </p>
          </div>

          {project.impact && (
            <div className="p-5 sm:p-6 rounded-2xl bg-accent/5 border border-accent/20 relative overflow-hidden">

              <div className="absolute top-0 left-0 w-1.5 h-full bg-accent" />

              <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-accent mb-3">
                Project Impact
              </h4>

              <p className="text-text-main font-bold text-base lg:text-lg leading-relaxed italic">
                {project.impact}
              </p>

            </div>
          )}

        </div>
      );
    }

    // ========================================================
    // RESOURCES TAB
    // ========================================================

    if (activeTab === 'resources') {
      return (
        <div className="flex flex-col gap-5">

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5 text-accent" />
            </div>

            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-accent">
              Project Resources
            </h4>
          </div>

          <div className="grid grid-cols-1 gap-3">

            {resources.map((resource, index) => (
              <a
                key={`${resource.url}-${index}`}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 p-4 rounded-xl bg-accent/5 border border-accent/20 hover:border-accent/50 hover:bg-accent/10 transition-all"
              >
                <div className="flex items-center gap-3 min-w-0">

                  <span className="text-accent shrink-0">
                    {resource.icon}
                  </span>

                  <span className="text-sm font-bold text-text-main break-words">
                    {resource.label}
                  </span>

                </div>

                <ExternalLink className="w-4 h-4 text-text-sub group-hover:text-accent shrink-0 transition-colors" />
              </a>
            ))}

          </div>

        </div>
      );
    }

    return null;
  };

  // ============================================================
  // MAIN PROJECT WINDOW
  // ============================================================

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 lg:p-8 bg-bg-main backdrop-blur-3xl overflow-hidden"
      onClick={handleClose}
    >

      {/* MAIN PROJECT CONTAINER */}
      <motion.div
        initial={{ scale: 0.97, y: 15 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.97, y: 15 }}
        transition={{ duration: 0.25 }}
        role="dialog"
        aria-modal="true"
        aria-label={`Project details: ${project.title}`}
        className="relative w-full max-w-7xl h-[96dvh] max-h-[1000px] bg-bg-main border border-border-main rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row"
        onClick={(event) => event.stopPropagation()}
      >

        {/* ======================================================
            CLOSE BUTTON
        ====================================================== */}

        <button
          type="button"
          onClick={handleClose}
          aria-label="Close project details"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-3 rounded-full bg-bg-main/90 backdrop-blur-xl border border-border-main text-text-main hover:bg-accent hover:text-white transition-all shadow-lg"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ======================================================
            LEFT PANEL: IMAGE AND VIDEO GALLERY
        ====================================================== */}

        <div className="relative w-full lg:w-[57%] h-[38dvh] sm:h-[45dvh] lg:h-full shrink-0 bg-bg-sub/50 overflow-hidden group flex items-center justify-center">

          <AnimatePresence mode="wait">

            <motion.div
              key={`${project.id}-${currentGalleryIndex}`}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                scale:
                  currentItem?.type === 'video'
                    ? 1
                    : isZoomed
                      ? 1.5
                      : 1
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`w-full h-full flex items-center justify-center ${
                currentItem?.type === 'video'
                  ? ''
                  : 'cursor-zoom-in'
              }`}
              onClick={() => {
                if (currentItem?.type !== 'video') {
                  setIsZoomed((previous) => !previous);
                }
              }}
            >

              {/* ==================================================
                  VIDEO PLAYER / IMAGE VIEWER
              ================================================== */}

              {currentItem?.type === 'video' ? (

                <div
                  className="w-full h-full flex items-center justify-center bg-black p-2 sm:p-4"
                  onClick={(event) => event.stopPropagation()}
                >

                  {currentItem.url.includes('drive.google.com') ? (

                    // GOOGLE DRIVE EMBEDDED VIDEO PLAYER
                    <iframe
                      key={currentItem.url}
                      src={currentItem.url}
                      title={currentItem.caption || 'Project Video'}
                      allow="autoplay; fullscreen; encrypted-media"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                      className="w-full h-full border-0 rounded-xl"
                    />

                  ) : (

                    // DIRECT MP4 / HTML5 VIDEO PLAYER
                    <video
                      ref={videoRef}
                      key={currentItem.url}
                      src={currentItem.url}
                      poster={currentItem.poster}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-contain rounded-xl"
                    >
                      Your browser does not support HTML5 video.
                    </video>

                  )}

                </div>

              ) : (

                // IMAGE VIEWER
                <img
                  src={currentItem?.url || project.thumbnail}
                  alt={currentItem?.caption || project.title}
                  className="w-full h-full object-contain select-none"
                  draggable={false}
                />

              )}

            </motion.div>

          </AnimatePresence>

          {/* ======================================================
              IMAGE / VIDEO CAPTION
          ====================================================== */}

          {currentItem?.caption && !isZoomed && (
            <div className="absolute bottom-16 sm:bottom-20 left-0 right-0 px-5 sm:px-8 py-5 bg-gradient-to-t from-bg-main/95 via-bg-main/75 to-transparent pointer-events-none z-10">

              <p className="text-text-main text-xs sm:text-sm font-mono font-bold tracking-wide leading-relaxed">
                {currentItem.caption}
              </p>

            </div>
          )}

          {/* ======================================================
              GALLERY NAVIGATION
          ====================================================== */}

          {gallery.length > 1 && (
            <>

              {/* PREVIOUS ITEM */}
              <button
                type="button"
                onClick={prevItem}
                aria-label="Previous gallery item"
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-bg-main/80 backdrop-blur-xl border border-border-main text-text-main hover:bg-accent hover:text-white transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* NEXT ITEM */}
              <button
                type="button"
                onClick={nextItem}
                aria-label="Next gallery item"
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-bg-main/80 backdrop-blur-xl border border-border-main text-text-main hover:bg-accent hover:text-white transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* GALLERY INDICATORS */}
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20 max-w-[80%] overflow-x-auto">

                {gallery.map((item, index) => (
                  <button
                    type="button"
                    key={`${item.url}-${index}`}
                    aria-label={`View gallery item ${index + 1}`}
                    aria-current={
                      index === currentGalleryIndex
                        ? 'true'
                        : undefined
                    }
                    onClick={() => changeGalleryItem(index)}
                    className={`h-2.5 rounded-full shrink-0 transition-all ${
                      index === currentGalleryIndex
                        ? 'w-9 bg-accent'
                        : 'w-2.5 bg-text-sub/40 hover:bg-accent/60'
                    }`}
                  />
                ))}

              </div>

            </>
          )}

          {/* ======================================================
              IMAGE ZOOM INDICATOR
          ====================================================== */}

          {currentItem?.type !== 'video' && (
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 p-2.5 rounded-xl bg-bg-main/70 backdrop-blur-xl border border-border-main text-text-main pointer-events-none">

              {isZoomed ? (
                <ZoomOut className="w-5 h-5" />
              ) : (
                <ZoomIn className="w-5 h-5" />
              )}

            </div>
          )}

          {/* ======================================================
              VIDEO INDICATOR
          ====================================================== */}

          {currentItem?.type === 'video' && (
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 flex items-center gap-2 px-3 py-2 rounded-xl bg-bg-main/75 backdrop-blur-xl border border-border-main pointer-events-none">

              <Play className="w-4 h-4 text-accent" />

              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-text-main">
                Video
              </span>

            </div>
          )}

        </div>

        {/* ======================================================
            RIGHT PANEL: PROJECT DETAILS
        ====================================================== */}

        <div className="w-full lg:w-[43%] flex-1 min-h-0 overflow-y-auto overscroll-contain custom-scrollbar bg-bg-main">

          <div className="p-5 sm:p-8 lg:p-10 xl:p-12">

            {/* ==================================================
                PROJECT TITLE AND METADATA
            ================================================== */}

            <div className="mb-8 pr-12">

              <div className="flex items-center gap-3 mb-5">

                <span className="w-2 h-2 rounded-full bg-accent" />

                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-accent">
                  Project Portfolio
                </span>

              </div>

              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-display font-black tracking-tighter leading-[1.1] text-text-main break-words">
                {project.title}
              </h2>

              <div className="flex flex-wrap items-center gap-3 mt-5 text-text-sub font-mono text-xs font-bold uppercase tracking-wider">

                <span>{project.role}</span>

                <span className="w-1 h-1 rounded-full bg-accent" />

                <span>{project.duration}</span>

              </div>

            </div>

            {/* ==================================================
                DYNAMIC TAB NAVIGATION
            ================================================== */}

            <div className="mb-8">

              <div
                role="tablist"
                aria-label="Project information"
                className={`grid ${
                  hasResources ? 'grid-cols-3' : 'grid-cols-2'
                } gap-2 p-1.5 bg-bg-sub/50 rounded-2xl border border-border-main`}
              >

                {tabs.map((tab) => (
                  <button
                    type="button"
                    key={tab.id}
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center justify-center gap-2 px-2 sm:px-3 py-3 rounded-xl text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all ${
                      activeTab === tab.id
                        ? 'bg-accent text-white shadow-accent-sm'
                        : 'text-text-sub hover:bg-accent/10 hover:text-accent'
                    }`}
                  >

                    <span className="hidden sm:block">
                      {tab.icon}
                    </span>

                    <span>{tab.label}</span>

                  </button>
                ))}

              </div>

            </div>

            {/* ==================================================
                ACTIVE TAB CONTENT
            ================================================== */}

            <AnimatePresence mode="wait">

              <motion.div
                key={`${project.id}-${activeTab}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                role="tabpanel"
                className="bg-bg-sub/20 p-5 sm:p-7 rounded-2xl border border-border-main min-h-[180px]"
              >

                {renderTabContent()}

              </motion.div>

            </AnimatePresence>

            {/* ==================================================
                TECHNOLOGIES AND SKILLS
            ================================================== */}

            {project.technologies &&
              project.technologies.length > 0 && (

                <div className="mt-10">

                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-accent mb-4">
                    Technologies & Skills
                  </h4>

                  <div className="flex flex-wrap gap-2">

                    {project.technologies.map(
                      (technology, index) => (
                        <span
                          key={`${technology}-${index}`}
                          className="px-3 py-2 rounded-lg bg-accent/5 border border-accent/15 text-text-sub text-[10px] font-bold uppercase tracking-wide"
                        >
                          {technology}
                        </span>
                      )
                    )}

                  </div>

                </div>

              )}

            {/* ==================================================
                DIRECT GITHUB LINK
            ================================================== */}

            {project.attachments?.github && (
              <div className="mt-10">

                <a
                  href={project.attachments.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl bg-bg-sub/40 border border-border-main hover:border-accent hover:text-accent transition-all font-black text-xs uppercase tracking-widest text-text-main"
                >

                  <Github className="w-5 h-5" />

                  View Repository

                  <ExternalLink className="w-4 h-4" />

                </a>

              </div>
            )}

            {/* BOTTOM SPACING */}
            <div className="h-8" />

          </div>

        </div>

      </motion.div>

    </motion.div>
  );
};

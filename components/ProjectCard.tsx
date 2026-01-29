
import React, { useState, useEffect } from 'react';
import { AutomationProject } from '../types';
import { X, Cpu, ChevronRight, Zap, CheckCircle2 } from 'lucide-react';

interface ProjectCardProps {
  project: AutomationProject;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      <div className="glass rounded-3xl p-6 md:p-8 flex flex-col h-full hover:border-blue-500/50 transition-all duration-300 group">
        <div className="flex items-start justify-between mb-6">
          <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 glow-blue">
            <Cpu size={24} />
          </div>
          <div className="flex gap-2">
            {project.techStack.slice(0, 2).map(tech => (
              <span key={tech} className="text-[10px] uppercase tracking-widest bg-slate-800 px-2 py-1 rounded-md text-slate-400">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3">
          {project.concept}
        </p>

        <div className="space-y-4 mb-8">
          <div>
            <span className="text-[10px] uppercase text-blue-400 font-bold tracking-widest block mb-1">Impact</span>
            <p className="text-slate-300 text-sm italic truncate">"{project.challenge}"</p>
          </div>
        </div>

        <div className="mt-auto">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full group/btn flex items-center justify-center gap-2 py-4 bg-slate-900 border border-slate-800 rounded-2xl text-sm font-semibold text-white hover:bg-blue-600 hover:border-blue-500 transition-all"
          >
            <span>Step-by-Step Build</span>
            <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Mini Page Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"></div>
          
          {/* Content Container */}
          <div 
            className="relative w-full max-w-5xl max-h-[90vh] glass rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 slide-in-from-bottom-8 duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-8 border-b border-slate-800 flex items-center justify-between sticky top-0 bg-slate-950/40 backdrop-blur-md z-10">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400">
                  <Zap size={24} />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h2>
                  <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mt-1">Technical Deep-Dive</p>
                </div>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-3 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Left Sidebar: Context */}
                <div className="lg:col-span-4 space-y-8">
                  <section>
                    <h4 className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">Problem Statement</h4>
                    <p className="text-slate-300 text-lg italic leading-relaxed">
                      "{project.challenge}"
                    </p>
                  </section>

                  <section>
                    <h4 className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">The Solution</h4>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      {project.solution}
                    </p>
                  </section>

                  <section>
                    <h4 className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map(tech => (
                        <span key={tech} className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </section>
                </div>

                {/* Right Area: Step-by-Step Build */}
                <div className="lg:col-span-8">
                  <h4 className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">Engineering Workflow</h4>
                  
                  <div className="space-y-10">
                    {project.steps.map((step, idx) => (
                      <div key={idx} className="relative flex gap-8 group/step">
                        {/* Timeline visual */}
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 font-bold text-sm relative z-10 group-hover/step:border-blue-500/50 group-hover/step:bg-blue-500/10 transition-all shadow-lg">
                            {idx + 1}
                          </div>
                          {idx !== project.steps.length - 1 && (
                            <div className="w-[2px] flex-grow bg-gradient-to-b from-slate-800 to-transparent mt-2"></div>
                          )}
                        </div>
                        
                        <div className="pb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <h5 className="text-lg font-bold text-white group-hover/step:text-blue-400 transition-colors">
                              {step.label}
                            </h5>
                            <CheckCircle2 size={16} className="text-blue-500/50" />
                          </div>
                          <p className="text-slate-400 leading-relaxed max-w-xl">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Footer */}
<div className="p-6 border-t border-slate-800 bg-slate-950/20 flex justify-between items-center gap-4">
{/* LEFT: Video Walkthrough Button */}
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Video Walkthrough</span>
              <a 
                href="https://www.loom.com/share/e85a662893584c08b17433a0d2e02af4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white rounded-xl transition-all group"
              >
                <div className="p-1 bg-blue-500/20 rounded-full group-hover:bg-blue-500/30">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-blue-400">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                <span className="font-semibold text-sm">Watch Demo</span>
              </a>
            </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20"
              >
                Close Mini-Page
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;

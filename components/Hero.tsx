
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-[0.2em]">Available for projects</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6">
            Turning Vision into <span className="text-gradient-blue">Digital Intelligence.</span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            I specialize in AI Automation, Creating AI Agents, and App Development using cutting-edge tech stacks like Make, n8n, and Flutter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#consultation" className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-blue-600 hover:text-white transition-all shadow-xl shadow-white/5">
              Start Your Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#automation" className="flex items-center justify-center px-8 py-4 glass text-white font-bold rounded-2xl hover:bg-slate-800 transition-all">
              View Portfolio
            </a>
          </div>
        </div>

        <div className="relative group">
          <div className="relative z-10 rounded-[3rem] overflow-hidden border-2 border-slate-800 transform rotate-2 group-hover:rotate-0 transition-transform duration-700 shadow-2xl">
            <img 
              src="/dums.jpg.jpg"
              alt="My Profile"
              className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
          </div>
          {/* Abstract Grid Backdrop */}
          <div className="absolute -inset-10 opacity-20 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

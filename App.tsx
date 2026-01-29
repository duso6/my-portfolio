
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import MobileAppCard from './components/MobileAppCard';
import Consultation from './components/Consultation';
import Footer from './components/Footer';
import { AUTOMATION_PROJECTS, MOBILE_APPS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero />

      {/* Portfolio Section A: Mobile Applications */}
      <section id="mobile" className="py-24 bg-slate-950/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-emerald-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Portfolio Section A</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Mobile Development</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Native-feeling experiences built with Flutter. Clean UI, robust offline support, and seamless cloud integration.
            </p>
          </div>

          <div className="space-y-12">
           {MOBILE_APPS.map((app) => (
            <div key={app.id} className="mb-20">
               <MobileAppCard 
                  title={app.name}           // "name" from data becomes "title" for the card
                  description={app.description}
                  imageSrc={app.image}       // "image" from data becomes "imageSrc"
                  tags={app.techStack}       // "techStack" from data becomes "tags"
                  features={app.features}
               />
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section B: AI Automation */}
      <section id="automation" className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Portfolio Section B</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">AI & Workflow Automation</h2>
            <p className="text-slate-400 text-lg">
              Engineered systems that remove operational friction. High-latency manual tasks converted into intelligent, zero-touch pipelines.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AUTOMATION_PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <Consultation />
      
      <Footer />
    </div>
  );
};

export default App;

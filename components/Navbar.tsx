
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-white tracking-tighter">
          DN<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#automation" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Automation</a>
          <a href="#mobile" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Mobile Apps</a>
          <a href="#consultation" className="px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-blue-500 hover:text-white transition-all">Start Project</a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-t border-slate-900 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2">
          <a href="#automation" onClick={() => setIsMenuOpen(false)} className="text-lg text-slate-300">Automation</a>
          <a href="#mobile" onClick={() => setIsMenuOpen(false)} className="text-lg text-slate-300">Mobile Apps</a>
          <a href="#consultation" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-4 rounded-xl bg-blue-600 text-white font-bold">Start Your Project</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

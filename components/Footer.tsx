import React from 'react';
import { ArrowUp, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-2xl font-bold tracking-tighter text-white mb-6 block">
              DN<span className="text-blue-500">.</span>
            </a>
            <p className="text-slate-400 text-lg max-w-sm leading-relaxed">
              Specialist in AI Automation and High-Performance Mobile Applications based in Abuja, Nigeria.
            </p>
          </div>

          {/* Column 2: Connect */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Connect</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:dumebinwankwo87@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                  <Mail size={18} className="text-blue-500" />
                  dumebinwankwo87@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+2347048812848" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                  <Phone size={18} className="text-blue-500" />
                  +234 7048812848
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-slate-400">
                  <MapPin size={18} className="text-blue-500" />
                  Gwarimpa FCT-Abuja
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Social (LinkedIn + GitHub) */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Social</h4>
            <div className="flex flex-col gap-4">
              
              {/* LinkedIn Button */}
              <a 
                href="https://www.linkedin.com/in/dumebi123" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl glass text-slate-300 hover:text-white hover:bg-slate-800 transition-all w-fit"
              >
                <Linkedin size={20} />
                <span className="font-semibold">LinkedIn Profile</span>
              </a>

              {/* GitHub Button */}
              <a 
                href="https://github.com/duso6" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl glass text-slate-300 hover:text-white hover:bg-slate-800 transition-all w-fit"
              >
                {/* Simple GitHub Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span className="font-semibold">GitHub Profile</span>
              </a>
              
            </div>
          </div>

        </div> 
        {/* End Grid */}

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-slate-900 gap-6">
          <p className="text-slate-500 text-sm italic">
            &copy; 2026 Dumebi Nwankwo. All Rights Reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 rounded-full glass hover:bg-slate-800 transition-colors text-slate-400 hover:text-white"
          >
            <ArrowUp size={20} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
// Import icons if you are using them, e.g., from 'lucide-react'

// 1. Define the Props (variables) this component accepts
interface MobileAppCardProps {
  title: string;
  description: string;
  imageSrc: string; // This is the new variable for the image!
  tags: string[];
  features: string[];
}

const MobileAppCard: React.FC<MobileAppCardProps> = ({
  title,
  description,
  imageSrc, // 2. Receive the image variable here
  tags,
  features,
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-10 p-10 bg-[#111827] rounded-3xl border border-[#1f2937]">
      {/* Phone Frame & Image Container */}
      <div className="relative w-[280px] h-[580px] shrink-0">
        {/* This div creates the rounded phone frame border */}
        <div className="absolute inset-0 border-[12px] border-black rounded-[3rem] overflow-hidden z-10 pointer-events-none shadow-xl"></div>
        
        {/* The App Screenshot */}
        {/* 3. Use the imageSrc variable here. object-cover makes it fit. */}
        <img
          src={imageSrc}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-[2.5rem]"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-4">
          {/* Assuming you have an icon here */}
          <span className="text-green-500">📱</span> 
          <span className="text-sm font-bold text-green-500 tracking-widest uppercase">
            {tags[0]}
          </span>
        </div>
        <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-400 text-lg mb-8">{description}</p>
{/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 mb-8">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center gap-3 group">
            <div className="text-emerald-400 bg-emerald-500/10 p-1.5 rounded-full group-hover:bg-emerald-500/20 transition-colors">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5"/>
              </svg>
            </div>
            <span className="text-slate-300 text-sm font-medium tracking-wide">
              {feature}
            </span>
          </div>
        ))}
      </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3">
          {tags.slice(1).map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-[#1f2937] text-gray-300 rounded-full text-sm font-medium border border-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileAppCard;
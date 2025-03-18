"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface AccoladesCardProps {
  hackathonName: string;
  description: string;
  photos: string;
  position: string;
  fullWidth: boolean;
  iconApp?: boolean;
  buttonText?: string;
  subtext?: string;
  id?: number;
}

const AccoladesCard: React.FC<AccoladesCardProps> = ({ 
  hackathonName, 
  description, 
  photos, 
  position, 
  fullWidth, 
  iconApp, 
  buttonText, 
  subtext 
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <motion.div 
      className={`relative overflow-hidden rounded-xl my-8 sm:my-0 ${fullWidth ? 'md:col-span-2' : ''}`}
      style={{ gridColumn: `span ${fullWidth ? 2 : 1}` }}
      whileHover={{
        scale: 1.03,
        // boxShadow: "0px 10px 20px rgba(255, 163, 0, 0.5)",
        transition: { duration: 0.3, ease: "easeInOut" }
      }}
    >
      <div className="relative h-64 w-full group">
        {/* Background Image */}
        <img 
          src={photos} 
          alt={`Photo of ${hackathonName}`} 
          className="w-full h-full object-cover rounded-xl"
        />

        {/* Collapsed Content */}
        {!expanded && (
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4 rounded-xl z-10">
            <h3 className="text-ieeeorange font-bold text-xl">{hackathonName}</h3>
            <p className="text-white mt-2 text-sm">{description.slice(0, 60)}...</p>
            <button 
            type='button'
              className="text-white underline mt-2 hover:text-ieeeyellow"
              onClick={toggleExpand}
              aria-expanded={expanded}
            >
              View More
            </button>
          </div>
        )}

        {/* Expanded Content */}
        <div 
          className={`absolute inset-0 bg-black/90 p-6 flex flex-col justify-center items-center rounded-xl z-20 transition-all duration-500 ease-in-out ${
            expanded 
              ? 'opacity-100 translate-y-0 pointer-events-auto' 
              : 'opacity-0 translate-y-full pointer-events-none'
          }`}
        >
          <h3 className="text-[#FF8500] font-bold text-2xl mb-4 text-center">{hackathonName}</h3>
          <p className="text-white text-center">{description}</p>
          {subtext && <p className="text-white mt-4 italic">{subtext}</p>}

          <button 
            className="text-white underline mt-4 hover:text-ieeeyellow"
            onClick={toggleExpand}
          >
            View Less
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default AccoladesCard;

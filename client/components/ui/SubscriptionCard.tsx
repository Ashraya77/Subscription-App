// components/SubscriptionCard.tsx
"use client"; // Important for client-side interactivity and Framer Motion

import React from 'react';
import { Sparkles, Film } from 'lucide-react';
import { motion } from 'framer-motion'; // Import motion

interface SubscriptionCardProps {
  title: string;
  price: string;
  description: string;
  buttonText: string;
  icon: 'ai' | 'movie';
  color: string;
  delay?: number; // Optional delay for staggered animation
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  title,
  price,
  description,
  buttonText,
  icon,
  color,
  delay = 0, // Default delay
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotate: 5 * (icon === 'ai' ? -1 : 1) }} // Initial state for animation
      animate={{ opacity: 1, y: 0, rotate: 0 }} // Final state
      transition={{ type: "spring", stiffness: 120, damping: 10, delay: delay }} // Smooth spring animation
      whileHover={{ scale: 1.07, rotate: icon === 'ai' ? -2 : 2, boxShadow: '10px 10px 0px rgba(0,0,0,1)' }} // Enhanced hover
      whileTap={{ scale: 0.98, rotate: 0, boxShadow: '2px 2px 0px rgba(0,0,0,1)' }} // Click effect
      className={`
        relative w-full max-w-xs p-6 rounded-2xl 
        border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 
        ${color} 
        flex flex-col justify-between items-center text-center space-y-4
        cursor-pointer
      `}
    >
      {/* Icon */}
      <div className="bg-white p-3 rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
        {icon === 'ai' ? (
          <Sparkles className="w-8 h-8 text-black" />
        ) : (
          <Film className="w-8 h-8 text-black" />
        )}
      </div>

      {/* Title */}
      <h3 className="font-black text-2xl text-black leading-tight tracking-tighter uppercase font-outline-2 text-outline-black">
        {title}
      </h3>

      {/* Price */}
      <p className="text-black font-extrabold text-3xl leading-none">
        {price}
      </p>

      {/* Description */}
      <p className="text-black font-medium text-sm mt-1">
        {description}
      </p>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: '6px 6px 0px 0px rgba(0,0,0,1)' }} // Button hover effect
        whileTap={{ scale: 0.95, boxShadow: '2px 2px 0px 0px rgba(0,0,0,1)' }} // Button click effect
        className="w-full py-3 px-4 mt-4 bg-black text-white 
          font-bold text-lg rounded-xl border-2 border-black 
          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
          transition-all duration-150 uppercase"
      >
        {buttonText}
      </motion.button>
    </motion.div>
  );
};

export default SubscriptionCard;
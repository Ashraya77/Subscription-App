// components/HeroSection.tsx
"use client"; // Important for client-side interactivity and Framer Motion

import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion'; // Import motion
import SubscriptionCard from '../ui/SubscriptionCard';

// To apply the custom font 'Bangers', ensure it's loaded in your layout.tsx
// e.g., import { Bangers } from 'next/font/google'; const bangers = Bangers({ ... });
// Then apply bangers.className to the h1 element, or configure Tailwind to use it.
// For now, I'm using a generic font-sans fallback, but 'Bangers' is ideal.

const HeroSection = () => {
  // Framer Motion variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay children by 0.3 seconds
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section className="w-full bg-gray-50 min-h-[calc(100vh-80px)] p-8 font-sans relative overflow-hidden">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <motion.div
        className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 z-10 py-12 lg:py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* --- Left Subscription Card --- */}
        <motion.div variants={itemVariants} className="w-full lg:w-1/3 flex justify-center lg:justify-start">
          <SubscriptionCard
            title="Gemini Pro AI"
            price="$19/month"
            description="Unlock advanced AI capabilities, faster responses, and exclusive features."
            buttonText="Unleash AI Power"
            icon="ai"
            color="bg-blue-300"
            delay={0.5} // Staggered delay for card
          />
        </motion.div>

        {/* --- Central Hero Content --- */}
        <div className="w-full lg:w-1/3 flex flex-col items-center text-center space-y-6 px-4">
          <motion.div variants={itemVariants} className="bg-white px-5 py-2 border-2 border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-3deg]">
            <span className="font-bold text-sm text-black uppercase">HEY YOU! NEED TOOLS?</span>
          </motion.div>
          
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.7 }}
            className="font-black text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-none relative"
            style={{
              // Inline style for the text-stroke effect
              color: 'transparent',
              WebkitTextStroke: '3px black', // Outline color and thickness
              textStroke: '3px black',
            }}
          >
            <span className="relative z-10 text-green-500 drop-shadow-[5px_5px_0px_rgba(0,0,0,0.8)]">SUPERCHARGE </span>
            <br />
            <span className="relative z-10 text-blue-500 drop-shadow-[5px_5px_0px_rgba(0,0,0,0.8)]">YOUR LIFE!</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="bg-white px-6 py-3 border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black font-medium text-lg max-w-md">
            The ultimate arsenal of subscriptions for digital heroes.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, repeat: Infinity, duration: 1, ease: "easeInOut" }} // Slower, infinite bounce
          >
            <div className="bg-yellow-400 p-3 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <ChevronDown className="w-6 h-6 text-black" />
            </div>
          </motion.div>
        </div>

        {/* --- Right Subscription Card --- */}
        <motion.div variants={itemVariants} className="w-full lg:w-1/3 flex justify-center lg:justify-end">
          <SubscriptionCard
            title="Netflix Premium"
            price="$15/month"
            description="Stream in stunning 4K, multiple screens, and download for offline viewing."
            buttonText="Binge Your Shows"
            icon="movie"
            color="bg-red-400"
            delay={0.8} // Staggered delay for card
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
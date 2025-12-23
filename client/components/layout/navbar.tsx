"use client";

import React, { useState } from 'react';
import { Search, ShoppingCart, User, Zap, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion'; // <-- Framer Motion Import

const ComicNavbarInteractive = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Configuration for the menu items with unique hover colors
  const navItems = [
    { name: 'Home', color: 'hover:bg-pink-300' },
    { name: 'All Products', color: 'hover:bg-cyan-300' },
    { name: 'Contact', color: 'hover:bg-lime-300' },
    { name: 'About Us', color: 'hover:bg-orange-300' },
  ];

  return (
    // MAIN CONTAINER: Now STICKY, full width, and uses the yellow background.
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="sticky top-0 w-full z-50 font-sans select-none bg-yellow-400 py-4" // Switched from fixed to sticky and added yellow background
    >
      
      {/* Background Dot Pattern (This will now stick with the yellow header) */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

      {/* NAVBAR CONTAINER: The white comic strip box is centered within the sticky yellow area */}
      <nav className="max-w-7xl mx-auto bg-white border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-2xl px-6 py-4 relative z-20">
        
        <div className="flex items-center justify-between">
          
          {/* --- LOGO --- */}
          <div className="flex items-center gap-2 pr-6">
            <div className="bg-yellow-400 p-1.5 border-2 border-black rounded-lg -rotate-3 group hover:rotate-0 transition-transform duration-300 cursor-pointer">
              <Zap className="w-5 h-5 text-black fill-white" />
            </div>
            <span className="text-xl font-black tracking-tight text-black italic">
              Comic<span className="text-yellow-500">Shop</span>
            </span>
          </div>

          {/* --- INTERACTIVE NAV ITEMS --- */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href="#" 
                className={`
                  px-4 py-2 rounded-lg 
                  text-sm font-bold text-gray-600 
                  border-2 border-transparent 
                  transition-all duration-200 ease-out
                  
                  /* HOVER STATES */
                  ${item.color} 
                  hover:text-black
                  hover:border-black 
                  hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                  hover:scale-110 
                  hover:-translate-y-1
                `}
              >
                {item.name}
              </a>
            ))}
          </div>

        {/* --- SEARCH BAR (Cleaner, pill shape) --- */}
          <div className="hidden md:flex flex-1 max-w-xs mx-8">
            <div className="relative w-full group">
              <input 
                type="text" 
                placeholder="Find something..." 
                className="w-full h-11 pl-5 pr-12 bg-gray-50 border-2 border-black rounded-full focus:outline-none focus:bg-white focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all font-medium text-sm"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 p-2 bg-yellow-400 border-2 border-black rounded-full hover:scale-105 transition-transform">
                <Search className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>

          {/* --- ACTION BUTTONS (Separated and Open) --- */}
          <div className="hidden md:flex items-center gap-6">
            
            {/* Cart Icon Only - Framer Motion Enhanced */}
            <motion.button 
                whileHover={{ scale: 1.15, rotate: 10 }} // Pop and spin effect
                whileTap={{ scale: 0.9, rotate: 0 }}
                className="relative group transition-transform"
            >
              <ShoppingCart className="w-7 h-7 text-black group-hover:text-yellow-600 transition-colors" />
              <span className="absolute -top-2 -right-2 bg-black text-white w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold border-2 border-white">
                3
              </span>
            </motion.button>

            {/* Login Button - Framer Motion Enhanced */}
            <motion.button
                whileHover={{ scale: 1.05, boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }} // Shadow grows slightly
                whileTap={{ scale: 0.95, boxShadow: '1px 1px 0px 0px rgba(0,0,0,1)', x: 2, y: 2 }} // Button press effect
                className="flex items-center gap-2 px-6 py-2.5 bg-yellow-400 border-2 border-black rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-bold text-sm tracking-wide transition-all"
            >
              <User className="w-4 h-4" />
              Login
            </motion.button>
          </div>

          {/* --- MOBILE HAMBURGER --- */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-black hover:bg-gray-100 rounded-md transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* --- MOBILE MENU --- */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pt-6 border-t-2 border-gray-100 flex flex-col gap-4">
             {navItems.map((item) => (
                <a key={item.name} href="#" className={`text-lg font-bold px-4 py-2 rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] ${item.color.replace('hover:', '')}`}>
                  {item.name}
                </a>
              ))}

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }} // Shadow grows slightly
                whileTap={{ scale: 0.95, boxShadow: '1px 1px 0px 0px rgba(0,0,0,1)', x: 2, y: 2 }} // Button press effect
                className="flex items-center gap-2 px-6 py-2.5 bg-yellow-400 border-2 border-black rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-bold text-sm tracking-wide transition-all"
            >
              <User className="w-4 h-4" />
              Login
            </motion.button>
              
          </div>
        )}
      </nav>
    </motion.header>
  );
};

export default ComicNavbarInteractive;
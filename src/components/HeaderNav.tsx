import React from 'react';
import { motion } from 'motion/react';
import { EASE_BEZIER } from '../constants';

export default function HeaderNav() {
  const handleScrollToStory = () => {
    const el = document.getElementById('main-content-section');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      id="header-nav"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE_BEZIER, delay: 0.15 }}
      className="fixed z-20 pointer-events-auto mix-blend-exclusion top-4 right-4 sm:top-8 sm:right-8 h-[30px] flex items-center justify-between w-auto lg:w-[330px]"
    >
      <button
        onClick={handleScrollToStory}
        className="hidden lg:inline-block font-['Inter_Tight'] font-medium text-[15px] uppercase tracking-normal text-white hover:opacity-75 transition-opacity cursor-pointer"
      >
        ABOUT
      </button>

      <div className="flex items-center gap-5 lg:gap-[50px]">
        {/* Hamburger 2-line icon */}
        <button
          onClick={handleScrollToStory}
          className="cursor-pointer hover:opacity-75 transition-opacity"
          aria-label="Toggle menu"
        >
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 lg:w-[30px] lg:h-[30px]"
          >
            <path d="M0 14H40" stroke="white" strokeWidth="2.5" />
            <path d="M0 26H40" stroke="white" strokeWidth="2.5" />
          </svg>
        </button>

        {/* CART text */}
        <span className="font-['Inter_Tight'] font-medium text-[13px] lg:text-[15px] text-white tracking-normal select-none">
          [ CART ]
        </span>
      </div>
    </motion.header>
  );
}

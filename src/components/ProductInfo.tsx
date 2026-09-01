import React from 'react';
import { motion } from 'motion/react';
import { EASE_BEZIER } from '../constants';

export default function ProductInfo() {
  return (
    <motion.div
      id="outro-info"
      data-outro-offset-desktop="166"
      data-outro-offset-mobile="132"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE_BEZIER, delay: 0.45 }}
      className="fixed z-20 pointer-events-none mix-blend-exclusion flex flex-col items-center bottom-12 lg:bottom-20 left-0 right-0 lg:left-auto lg:right-8 lg:w-[330px] will-change-transform"
    >
      {/* Top block */}
      <div className="flex flex-col items-start w-63 lg:w-full mb-3 lg:mb-8">
        {/* Circle Icon with dynamic symbol */}
        <div className="relative w-5 h-5 lg:w-[30px] lg:h-[30px] mb-2 flex items-center justify-center">
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <circle
              cx="20"
              cy="20"
              r="18.75"
              stroke="white"
              strokeWidth="2.5"
            />
          </svg>
          <span
            id="circle-symbol"
            className="absolute inset-0 flex items-center justify-center font-['Inter_Tight'] font-medium text-[10px] lg:text-[15px] tracking-[-0.04em] uppercase text-white select-none"
          >
            8
          </span>
        </div>

        {/* Collection Label */}
        <h2 className="w-full text-center font-['Inter_Tight'] font-medium text-[20px] lg:text-[30px] leading-[100%] tracking-[-0.04em] uppercase text-white whitespace-pre-line">
          ARCHIVE COLLECTION{'\n'}"PROMPT"
        </h2>
      </div>

      {/* Price */}
      <div className="w-full text-center font-['Inter_Tight'] font-medium text-[60px] lg:text-[80px] leading-[100%] tracking-[-0.04em] text-white">
        $97,33
      </div>
    </motion.div>
  );
}

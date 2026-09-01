import React from 'react';
import { motion } from 'motion/react';
import { EASE_BEZIER } from '../constants';

export default function Caption() {
  return (
    <motion.div
      id="brand-caption"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE_BEZIER, delay: 0.3 }}
      className="fixed z-20 pointer-events-none mix-blend-exclusion left-4 sm:left-8 top-[118px] sm:top-45 lg:top-61 w-[calc(100vw-32px)] sm:w-[calc(50vw-48px)] lg:w-173"
    >
      <p className="font-['Inter_Tight'] font-medium text-[12px] leading-[140%] tracking-[-0.04em] text-white">
        When switching between videos near the center, do not reset currentTime to 0 abruptly. Add a small dead zone: if cursor is within +/-50px of center, keep both videos at currentTime = 0 and show whichever was last active.
      </p>
    </motion.div>
  );
}

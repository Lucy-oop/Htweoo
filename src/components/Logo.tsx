import React from 'react';
import { motion } from 'motion/react';
import { EASE_BEZIER } from '../constants';

export default function Logo() {
  return (
    <motion.div
      id="brand-logo"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE_BEZIER, delay: 0 }}
      className="fixed z-20 pointer-events-none mix-blend-exclusion top-4 left-4 sm:top-8 sm:left-8 w-[124px] sm:w-[266px] lg:w-[355px]"
    >
      <svg
        viewBox="0 0 355 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Custom bold typographic path for "prmpt" */}
        {/* Letter 'p' */}
        <path
          d="M10 20 H50 C65 20 76 31 76 46 C76 61 65 72 50 72 H28 V100 H10 V20 Z M28 36 V56 H48 C55 56 60 51 60 46 C60 41 55 36 48 36 H28 Z"
          fill="white"
        />
        {/* Letter 'r' */}
        <path
          d="M86 38 H104 V48 C108 41 116 38 126 38 V56 C114 56 104 62 104 74 V100 H86 V38 Z"
          fill="white"
        />
        {/* Letter 'm' */}
        <path
          d="M136 38 H154 V47 C158 41 166 38 174 38 C184 38 190 43 194 51 C199 43 207 38 218 38 C232 38 240 47 240 64 V100 H222 V67 C222 57 218 52 210 52 C202 52 196 58 196 68 V100 H178 V67 C178 57 174 52 166 52 C158 52 154 58 154 68 V100 H136 V38 Z"
          fill="white"
        />
        {/* Letter 'p' */}
        <path
          d="M250 38 H268 V47 C273 41 282 38 293 38 C310 38 322 51 322 69 C322 87 310 100 293 100 C282 100 273 97 268 91 V118 H250 V38 Z M268 55 V83 C273 87 279 89 285 89 C296 89 304 80 304 69 C304 58 296 49 285 49 C279 49 273 51 268 55 Z"
          fill="white"
        />
        {/* Letter 't' */}
        <path
          d="M328 22 H346 V38 H355 V52 H346 V84 C346 89 349 91 354 91 H355 V100 C349 100 338 100 332 94 C328 89 328 81 328 73 V52 H322 V38 H328 V22 Z"
          fill="white"
        />
        {/* Circled 'R' registered mark */}
        <g transform="translate(332, 8)">
          <circle cx="9" cy="9" r="8" stroke="white" strokeWidth="1.6" fill="none" />
          <path
            d="M6 5.5 H9.5 C10.8 5.5 11.8 6.3 11.8 7.5 C11.8 8.6 11 9.3 9.8 9.4 L12 12.5 H10.2 L8.3 9.6 H7.5 V12.5 H6 V5.5 Z M7.5 6.7 V8.5 H9.3 C10 8.5 10.4 8.1 10.4 7.6 C10.4 7.1 10 6.7 9.3 6.7 H7.5 Z"
            fill="white"
          />
        </g>
      </svg>
    </motion.div>
  );
}

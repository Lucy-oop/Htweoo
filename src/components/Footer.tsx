import React from 'react';

export default function Footer() {
  return (
    <footer
      id="outro-footer"
      className="fixed z-20 pointer-events-none mix-blend-exclusion flex items-center justify-between lg:justify-start lg:gap-20 left-4 sm:left-8 right-4 lg:right-auto bottom-6 lg:bottom-8 opacity-0 will-change-[opacity]"
    >
      <span className="font-['Inter_Tight'] font-medium text-[11px] lg:text-[13px] tracking-[-0.02em] uppercase text-white">
        PRMPT (R) 2026
      </span>
      <span className="font-['Inter_Tight'] font-medium text-[11px] lg:text-[13px] tracking-[-0.02em] uppercase text-white">
        PRIVACY POLICY
      </span>
    </footer>
  );
}

import React from 'react';

interface ViewButtonProps {
  onClick?: () => void;
}

export default function ViewButton({ onClick }: ViewButtonProps) {
  return (
    <div
      id="outro-buy"
      onClick={onClick}
      className="fixed z-20 pointer-events-auto cursor-pointer mix-blend-exclusion flex items-center justify-center bg-white rounded-[1335px] will-change-transform right-4 lg:right-8 bottom-15 lg:bottom-8 left-4 lg:left-auto lg:w-[330px] h-25 lg:h-[174px] hover:opacity-90 transition-opacity"
      style={{
        transformOrigin: 'right bottom',
        transform: 'scale(0)',
      }}
    >
      <span className="font-['Inter_Tight'] font-medium text-[72px] lg:text-[110px] tracking-[-0.04em] text-white mix-blend-exclusion select-none leading-none -mt-1 lg:-mt-2">
        view
      </span>
    </div>
  );
}

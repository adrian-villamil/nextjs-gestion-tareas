'use client';

import { useState } from 'react';

interface Props {
  title: string;
  children: React.ReactNode;
}

export const Tooltip = ({ title, children }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  return (
    <div className="relative">
      <span
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </span>
      {isVisible && (
        <span className="absolute top-[calc(100%+6px)] left-1/2 -translate-x-1/2 p-2 rounded bg-gray-700 text-white text-xs">
          {title}
        </span>
      )}
    </div>
  );
};
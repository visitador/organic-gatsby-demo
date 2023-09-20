import React from "react";

interface CaretDownProps {
  className?: string;
}

export const CaretDown: React.FC<CaretDownProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.33329 5.66669L7.99996 10.3334L12.6666 5.66669" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
);

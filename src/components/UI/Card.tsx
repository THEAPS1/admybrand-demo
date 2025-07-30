import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glassmorphism?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  glassmorphism = false 
}) => {
  const baseClasses = glassmorphism
    ? 'backdrop-blur-md bg-white/10 dark:bg-gray-800/10 border border-white/20 dark:border-gray-700/20'
    : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700';

  return (
    <div className={`
      ${baseClasses}
      rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl
      ${className}
    `}>
      {children}
    </div>
  );
};
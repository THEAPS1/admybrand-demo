import React from 'react';

interface LoadingSkeletonProps {
  className?: string;
  animate?: boolean;
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ 
  className = '', 
  animate = true 
}) => {
  return (
    <div className={`
      bg-gray-200 dark:bg-gray-700 rounded
      ${animate ? 'animate-pulse' : ''}
      ${className}
    `} />
  );
};

export const CardSkeleton: React.FC = () => (
  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
    <div className="animate-pulse">
      <div className="flex items-center justify-between mb-4">
        <LoadingSkeleton className="h-4 w-24" />
        <LoadingSkeleton className="h-8 w-8 rounded-full" />
      </div>
      <LoadingSkeleton className="h-8 w-32 mb-2" />
      <LoadingSkeleton className="h-4 w-20" />
    </div>
  </div>
);

export const ChartSkeleton: React.FC = () => (
  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
    <div className="animate-pulse">
      <LoadingSkeleton className="h-6 w-40 mb-6" />
      <LoadingSkeleton className="h-64 w-full" />
    </div>
  </div>
);
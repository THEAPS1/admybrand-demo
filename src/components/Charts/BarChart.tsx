import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Card } from '../UI/Card';
import { ChartSkeleton } from '../UI/LoadingSkeleton';
import { Maximize2, X } from 'lucide-react';

interface BarChartComponentProps {
  data: any[];
  title: string;
  dataKey: string;
  loading?: boolean;
}

export const BarChartComponent: React.FC<BarChartComponentProps> = ({ 
  data, 
  title, 
  dataKey,
  loading = false 
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (loading) {
    return <ChartSkeleton />;
  }

  const chartContent = (
    <div className={`${isFullscreen ? 'fixed inset-0 z-50 bg-white dark:bg-gray-900 p-8' : ''}`}>
      <div className={`${isFullscreen ? 'h-full' : ''}`}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
            <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mr-3"></div>
            {title}
          </h3>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            title={isFullscreen ? 'Exit fullscreen' : 'View fullscreen'}
          >
            {isFullscreen ? (
              <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            ) : (
              <Maximize2 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            )}
          </button>
        </div>
        <div className={`${isFullscreen ? 'h-[calc(100%-80px)]' : 'h-72'}`}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
              <defs>
                {data.map((entry, index) => (
                  <linearGradient key={index} id={`barGradient-${index}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={entry.color} stopOpacity={1}/>
                    <stop offset="100%" stopColor={entry.color} stopOpacity={0.7}/>
                  </linearGradient>
                ))}
              </defs>
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="#e5e7eb" 
                strokeOpacity={0.5}
                vertical={false}
              />
              <XAxis 
                dataKey="source" 
                stroke="#6b7280"
                fontSize={12}
                angle={-45}
                textAnchor="end"
                height={80}
                tickLine={false}
                axisLine={false}
                tickMargin={10}
              />
              <YAxis 
                stroke="#6b7280"
                fontSize={12}
                tickFormatter={(value) => `${(value / 1000).toFixed(1)}k`}
                tickLine={false}
                axisLine={false}
                tickMargin={10}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--tooltip-bg, #1f2937)',
                  border: 'none',
                  borderRadius: '12px',
                  color: 'var(--tooltip-text, #fff)',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  padding: '12px 16px',
                  fontSize: '14px'
                }}
                formatter={(value) => [`${value.toLocaleString()}`, 'Users']}
                wrapperStyle={{
                  '--tooltip-bg': 'hsl(var(--background))',
                  '--tooltip-text': 'hsl(var(--foreground))'
                } as React.CSSProperties}
                cursor={{
                  fill: 'rgba(59, 130, 246, 0.1)',
                  stroke: '#3B82F6',
                  strokeWidth: 1
                }}
              />
              <Bar 
                dataKey={dataKey} 
                radius={[8, 8, 0, 0]}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={`url(#barGradient-${index})`}
                    stroke="none"
                    strokeWidth={0}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  if (isFullscreen) {
    return chartContent;
  }

  return (
    <Card className="p-6 bg-white dark:bg-gray-800 border-0 shadow-lg rounded-xl">
      {chartContent}
    </Card>
  );
};
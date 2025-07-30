import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from '../UI/Card';
import { ChartSkeleton } from '../UI/LoadingSkeleton';
import { Maximize2, X } from 'lucide-react';

interface AreaChartComponentProps {
  data: any[];
  title: string;
  loading?: boolean;
}

export const AreaChartComponent: React.FC<AreaChartComponentProps> = ({ 
  data, 
  title,
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
            <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <defs>
                <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="#e5e7eb" 
                strokeOpacity={0.5}
                vertical={false}
              />
              <XAxis 
                dataKey="stage" 
                stroke="#6b7280"
                fontSize={12}
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
                formatter={(value) => [`${value.toLocaleString()}`, 'Count']}
                wrapperStyle={{
                  '--tooltip-bg': 'hsl(var(--background))',
                  '--tooltip-text': 'hsl(var(--foreground))'
                } as React.CSSProperties}
                cursor={{
                  stroke: '#3B82F6',
                  strokeWidth: 2,
                  strokeDasharray: "5 5"
                }}
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#3B82F6" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorVisitors)"
                dot={{
                  fill: '#3B82F6',
                  strokeWidth: 3,
                  r: 5,
                  stroke: '#fff',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                }}
                activeDot={{
                  r: 8,
                  stroke: '#3B82F6',
                  strokeWidth: 3,
                  fill: '#fff',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
                }}
              />
            </AreaChart>
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
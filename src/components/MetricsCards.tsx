import React from 'react';
import { TrendingUp, TrendingDown, Users, DollarSign, Target, Activity } from 'lucide-react';
import { Card } from './UI/Card';
import { LoadingSkeleton } from './UI/LoadingSkeleton';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
  loading?: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, isPositive, icon, loading }) => {
  if (loading) {
    return <LoadingSkeleton className="h-24" />;
  }

  return (
    <Card className="p-4 sm:p-6 bg-white dark:bg-gray-800 border-0 shadow-lg rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
            {title}
          </p>
          <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {value}
          </p>
          <div className="flex items-center">
            {isPositive ? (
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
            )}
            <span className={`text-sm font-medium ${isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
              {change}
            </span>
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            {icon}
          </div>
        </div>
      </div>
    </Card>
  );
};

interface MetricsCardsProps {
  loading?: boolean;
}

export const MetricsCards: React.FC<MetricsCardsProps> = ({ loading = false }) => {
  const metrics = [
    {
      title: 'TOTAL REVENUE',
      value: '$142.5K',
      change: '+12.5% vs last month',
      isPositive: true,
      icon: <DollarSign className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
    },
    {
      title: 'ACTIVE USERS',
      value: '28,439',
      change: '+8.2% vs last month',
      isPositive: true,
      icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
    },
    {
      title: 'CONVERSIONS',
      value: '1,247',
      change: '-2.4% vs last month',
      isPositive: false,
      icon: <Target className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
    },
    {
      title: 'GROWTH RATE',
      value: '+12.5%',
      change: '+15.8% vs last month',
      isPositive: true,
      icon: <Activity className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {metrics.map((metric, index) => (
        <MetricCard
          key={index}
          title={metric.title}
          value={metric.value}
          change={metric.change}
          isPositive={metric.isPositive}
          icon={metric.icon}
          loading={loading}
        />
      ))}
    </div>
  );
};
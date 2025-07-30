import { Campaign, ChartData, TrafficSource } from '../types';
import { format, subDays } from 'date-fns';

// Generate mock campaign data
export const generateCampaigns = (): Campaign[] => {
  const campaigns: Campaign[] = [];
  const sources = ['Google Ads', 'Facebook', 'Instagram', 'Email Marketing', 'Organic Search', 'LinkedIn', 'Twitter', 'YouTube'];
  const statuses: ('active' | 'paused' | 'completed')[] = ['active', 'paused', 'completed'];
  
  for (let i = 0; i < 25; i++) {
    const budget = Math.floor(Math.random() * 50000) + 5000;
    const spend = Math.floor(budget * (0.3 + Math.random() * 0.7));
    const impressions = Math.floor(Math.random() * 500000) + 10000;
    const clicks = Math.floor(impressions * (0.01 + Math.random() * 0.05));
    const conversions = Math.floor(clicks * (0.02 + Math.random() * 0.08));
    const ctr = (clicks / impressions) * 100;
    const cpc = spend / clicks;
    const roas = (conversions * 75) / spend;
    
    campaigns.push({
      id: `campaign-${i + 1}`,
      name: `Campaign ${i + 1} - ${sources[Math.floor(Math.random() * sources.length)]}`,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      budget,
      spend,
      impressions,
      clicks,
      ctr: Number(ctr.toFixed(2)),
      cpc: Number(cpc.toFixed(2)),
      conversions,
      roas: Number(roas.toFixed(2)),
      source: sources[Math.floor(Math.random() * sources.length)],
      startDate: format(subDays(new Date(), Math.floor(Math.random() * 30)), 'yyyy-MM-dd'),
      endDate: format(new Date(), 'yyyy-MM-dd'),
    });
  }
  
  return campaigns;
};

// Generate time series data for charts
export const generateChartData = (): ChartData[] => {
  const data: ChartData[] = [];
  
  for (let i = 29; i >= 0; i--) {
    const date = subDays(new Date(), i);
    const baseRevenue = 4000 + Math.random() * 2000;
    const baseUsers = 800 + Math.random() * 400;
    const baseConversions = 30 + Math.random() * 20;
    const baseImpressions = 15000 + Math.random() * 5000;
    
    data.push({
      date: format(date, 'MM/dd'),
      revenue: Math.floor(baseRevenue),
      users: Math.floor(baseUsers),
      conversions: Math.floor(baseConversions),
      impressions: Math.floor(baseImpressions),
    });
  }
  
  return data;
};

// Traffic source distribution data
export const trafficSources: TrafficSource[] = [
  { name: 'Google Ads', value: 35, color: '#3B82F6' },
  { name: 'Facebook', value: 25, color: '#10B981' },
  { name: 'Instagram', value: 20, color: '#F59E0B' },
  { name: 'Email Marketing', value: 12, color: '#EF4444' },
  { name: 'Organic Search', value: 8, color: '#8B5CF6' },
];

// User acquisition by source data
export const userAcquisitionData = [
  { source: 'Google Ads', users: 12500, color: '#3B82F6' },
  { source: 'Facebook', users: 8900, color: '#10B981' },
  { source: 'Instagram', users: 6700, color: '#F59E0B' },
  { source: 'Email', users: 4200, color: '#EF4444' },
  { source: 'Organic', users: 3800, color: '#8B5CF6' },
  { source: 'LinkedIn', users: 2100, color: '#06B6D4' },
];

// Conversion funnel data
export const conversionFunnelData = [
  { stage: 'Visitors', value: 28439, color: '#3B82F6' },
  { stage: 'Leads', value: 8532, color: '#10B981' },
  { stage: 'Qualified', value: 3421, color: '#F59E0B' },
  { stage: 'Customers', value: 1247, color: '#EF4444' },
];
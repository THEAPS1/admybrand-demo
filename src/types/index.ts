export interface Campaign {
  id: string;
  name: string;
  status: 'active' | 'paused' | 'completed';
  budget: number;
  spend: number;
  impressions: number;
  clicks: number;
  ctr: number;
  cpc: number;
  conversions: number;
  roas: number;
  source: string;
  startDate: string;
  endDate: string;
}

export interface MetricCard {
  title: string;
  value: string;
  change: number;
  icon: string;
  color: string;
}

export interface ChartData {
  date: string;
  revenue: number;
  users: number;
  conversions: number;
  impressions: number;
}

export interface TrafficSource {
  name: string;
  value: number;
  color: string;
}

export interface Theme {
  isDark: boolean;
  toggle: () => void;
}

export interface ToastMessage {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
}
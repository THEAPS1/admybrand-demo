import React, { useState, useEffect } from 'react';
import { Header } from './components/Layout/Header';
import { Sidebar } from './components/Layout/Sidebar';
import { MetricsCards } from './components/MetricsCards';
import { LineChartComponent } from './components/Charts/LineChart';
import { BarChartComponent } from './components/Charts/BarChart';
import { DonutChartComponent } from './components/Charts/DonutChart';
import { AreaChartComponent } from './components/Charts/AreaChart';
import { DataTable } from './components/DataTable';
import { ToastContainer } from './components/UI/Toast';
import { useTheme } from './hooks/useTheme';
import { useToast } from './hooks/useToast';
import { 
  generateCampaigns, 
  generateChartData, 
  trafficSources, 
  userAcquisitionData,
  conversionFunnelData 
} from './data/mockData';
import { Card } from './components/UI/Card'; // Added Card import

function App() {
  const { isDark, toggle: toggleTheme } = useTheme();
  const { toasts, addToast, removeToast } = useToast();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [campaigns, setCampaigns] = useState(generateCampaigns());
  const [chartData, setChartData] = useState(generateChartData());
  
  // Settings state
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [notifications, setNotifications] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@company.com',
    role: 'Marketing Manager'
  });

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      addToast('Dashboard loaded successfully!', 'success');
    }, 2000);

    return () => clearTimeout(timer);
  }, [addToast]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (!loading && autoRefresh) {
        setChartData(generateChartData());
        addToast('Data updated in real-time', 'info');
      }
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, [loading, addToast, autoRefresh]);

  const handleExport = () => {
    // Simulate export functionality
    addToast('Export started! Download will begin shortly.', 'success');
    
    // Create and download CSV
    const csvContent = "data:text/csv;charset=utf-8," + 
      "Campaign Name,Status,Source,Budget,Spend,Impressions,Clicks,CTR,Conversions,ROAS\n" +
      campaigns.map(c => 
        `${c.name},${c.status},${c.source},${c.budget},${c.spend},${c.impressions},${c.clicks},${c.ctr},${c.conversions},${c.roas}`
      ).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "campaign_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleProfileUpdate = () => {
    addToast('Profile updated successfully!', 'success');
  };

  const handlePasswordChange = () => {
    addToast('Password changed successfully!', 'success');
  };

  const handleToggleAutoRefresh = () => {
    setAutoRefresh(!autoRefresh);
    addToast(autoRefresh ? 'Auto refresh disabled' : 'Auto refresh enabled', 'info');
  };

  const handleToggleNotifications = () => {
    setNotifications(!notifications);
    addToast(notifications ? 'Notifications disabled' : 'Notifications enabled', 'info');
  };

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="flex">
          {/* Sidebar */}
          <Sidebar
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          {/* Main Content Area */}
          <div className={`flex-1 transition-all duration-300 ${isCollapsed ? 'ml-16 lg:ml-20' : 'ml-0 lg:ml-64'}`}>
            {/* Header */}
            <Header 
              isDark={isDark}
              toggleTheme={toggleTheme}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              isCollapsed={isCollapsed}
              setIsCollapsed={setIsCollapsed}
            />

            {/* Main Content */}
            <main className="p-4 sm:p-6">
              {activeTab === 'dashboard' && (
                <div className="space-y-6 sm:space-y-8">
                  {/* Page Title */}
                  <div className="mb-6 sm:mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      Dashboard Overview
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                      Welcome back! Here's what's happening with your campaigns.
                    </p>
                  </div>

                  {/* Metrics Cards */}
                  <MetricsCards loading={loading} />

                  {/* Charts Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <LineChartComponent
                      data={chartData}
                      title="Revenue Trends"
                      dataKey="revenue"
                      color="#3B82F6"
                      loading={loading}
                    />
                    <BarChartComponent
                      data={userAcquisitionData}
                      title="User Acquisition by Source"
                      dataKey="users"
                      loading={loading}
                    />
                    <DonutChartComponent
                      data={trafficSources}
                      title="Traffic Source Distribution"
                      loading={loading}
                    />
                    <AreaChartComponent
                      data={conversionFunnelData}
                      title="Conversion Funnel"
                      loading={loading}
                    />
                  </div>

                  {/* Data Table */}
                  <DataTable 
                    campaigns={campaigns} 
                    loading={loading}
                    onExport={handleExport}
                  />
                </div>
              )}

              {activeTab === 'analytics' && (
                <div className="space-y-6 sm:space-y-8">
                  <div className="mb-6 sm:mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      Advanced Analytics
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                      Deep dive into your marketing performance metrics.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    <LineChartComponent
                      data={chartData}
                      title="User Engagement Trends"
                      dataKey="users"
                      color="#10B981"
                      loading={loading}
                    />
                    <LineChartComponent
                      data={chartData}
                      title="Conversion Trends"
                      dataKey="conversions"
                      color="#F59E0B"
                      loading={loading}
                    />
                  </div>
                </div>
              )}

              {activeTab === 'campaigns' && (
                <div className="space-y-6 sm:space-y-8">
                  <div className="mb-6 sm:mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      Campaign Management
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                      Manage and optimize your marketing campaigns.
                    </p>
                  </div>
                  
                  <DataTable 
                    campaigns={campaigns} 
                    loading={loading}
                    onExport={handleExport}
                  />
                </div>
              )}

              {activeTab === 'reports' && (
                <div className="space-y-6 sm:space-y-8">
                  <div className="mb-6 sm:mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      Reports & Insights
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                      Generate comprehensive reports for stakeholders.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 sm:gap-6">
                    <DonutChartComponent
                      data={trafficSources}
                      title="Performance by Channel"
                      loading={loading}
                    />
                    <AreaChartComponent
                      data={conversionFunnelData}
                      title="Customer Journey Analysis"
                      loading={loading}
                    />
                  </div>
                </div>
              )}

              {activeTab === 'performance' && (
                <div className="space-y-6 sm:space-y-8">
                  <div className="mb-6 sm:mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      Performance Metrics
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                      Track and analyze key performance indicators.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    <LineChartComponent
                      data={chartData}
                      title="Conversion Rate Trends"
                      dataKey="conversions"
                      color="#10B981"
                      loading={loading}
                    />
                    <BarChartComponent
                      data={userAcquisitionData}
                      title="Performance by Source"
                      dataKey="users"
                      loading={loading}
                    />
                    <DonutChartComponent
                      data={trafficSources}
                      title="Channel Performance"
                      loading={loading}
                    />
                    <AreaChartComponent
                      data={conversionFunnelData}
                      title="Funnel Performance"
                      loading={loading}
                    />
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div className="space-y-6 sm:space-y-8">
                  <div className="mb-6 sm:mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      Settings
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                      Configure your dashboard preferences and account settings.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    {/* Profile Settings */}
                    <Card className="p-4 sm:p-6 bg-white dark:bg-gray-800 border-0 shadow-lg rounded-xl">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center">
                        <div className="w-2 h-6 sm:h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mr-3"></div>
                        Profile Settings
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            defaultValue={profileData.name}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            defaultValue={profileData.email}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Role
                          </label>
                          <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            <option>Marketing Manager</option>
                            <option>Analytics Specialist</option>
                            <option>Campaign Manager</option>
                            <option>Data Analyst</option>
                          </select>
                        </div>
                        <button 
                          onClick={handleProfileUpdate}
                          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Update Profile
                        </button>
                      </div>
                    </Card>

                    {/* Dashboard Preferences */}
                    <Card className="p-4 sm:p-6 bg-white dark:bg-gray-800 border-0 shadow-lg rounded-xl">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center">
                        <div className="w-2 h-6 sm:h-8 bg-gradient-to-b from-green-500 to-blue-600 rounded-full mr-3"></div>
                        Dashboard Preferences
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 dark:text-white">Dark Mode</h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Toggle dark/light theme</p>
                          </div>
                          <button
                            onClick={toggleTheme}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              isDark ? 'bg-blue-600' : 'bg-gray-200'
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                isDark ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 dark:text-white">Auto Refresh</h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Refresh data every 30 seconds</p>
                          </div>
                          <button 
                            onClick={handleToggleAutoRefresh}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              autoRefresh ? 'bg-blue-600' : 'bg-gray-200'
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                autoRefresh ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 dark:text-white">Notifications</h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Enable push notifications</p>
                          </div>
                          <button 
                            onClick={handleToggleNotifications}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              notifications ? 'bg-blue-600' : 'bg-gray-200'
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                notifications ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>
                      </div>
                    </Card>

                    {/* Data Export */}
                    <Card className="p-4 sm:p-6 bg-white dark:bg-gray-800 border-0 shadow-lg rounded-xl">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center">
                        <div className="w-2 h-6 sm:h-8 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full mr-3"></div>
                        Data Export
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Export Format
                          </label>
                          <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            <option>CSV</option>
                            <option>Excel</option>
                            <option>PDF</option>
                            <option>JSON</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Date Range
                          </label>
                          <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            <option>Last 7 days</option>
                            <option>Last 30 days</option>
                            <option>Last 90 days</option>
                            <option>Custom range</option>
                          </select>
                        </div>
                        <button 
                          onClick={handleExport}
                          className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
                        >
                          Export Data
                        </button>
                      </div>
                    </Card>

                    {/* Security Settings */}
                    <Card className="p-4 sm:p-6 bg-white dark:bg-gray-800 border-0 shadow-lg rounded-xl">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center">
                        <div className="w-2 h-6 sm:h-8 bg-gradient-to-b from-red-500 to-orange-600 rounded-full mr-3"></div>
                        Security
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Current Password
                          </label>
                          <input
                            type="password"
                            placeholder="Enter current password"
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            New Password
                          </label>
                          <input
                            type="password"
                            placeholder="Enter new password"
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            placeholder="Confirm new password"
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <button 
                          onClick={handlePasswordChange}
                          className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
                        >
                          Change Password
                        </button>
                      </div>
                    </Card>
                  </div>
                </div>
              )}

              {/* Other tabs would show relevant content */}
              {!['dashboard', 'analytics', 'campaigns', 'reports', 'performance', 'settings'].includes(activeTab) && (
                <div className="flex items-center justify-center h-96">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      This section is under development. Stay tuned for updates!
                    </p>
                  </div>
                </div>
              )}
            </main>
          </div>
        </div>

        {/* Toast Notifications */}
        <ToastContainer toasts={toasts} onRemove={removeToast} />
      </div>
    </div>
  );
}

export default App;
# ADmyBRAND Dashboard

A modern, responsive analytics dashboard built with React, TypeScript, and Tailwind CSS. This project provides a comprehensive solution for marketing analytics, campaign management, and performance tracking.

![Dashboard Preview](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?style=for-the-badge&logo=vite)

## ✨ Features

### 📊 **Interactive Analytics Dashboard**
- **Real-time Metrics**: Live updates of revenue, users, conversions, and growth
- **Interactive Charts**: Line, Bar, Donut, and Area charts with fullscreen support
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between themes with smooth transitions

### 🎯 **Advanced Chart Features**
- **Fullscreen Mode**: View charts in fullscreen with ESC key support
- **Hover Tooltips**: Detailed information on chart interactions
- **Modern Styling**: Gradient fills, shadows, and smooth animations
- **Data Export**: Export charts and data in multiple formats

### 📱 **Mobile-First Responsive Design**
- **Touch-Friendly**: Optimized for mobile interactions
- **Collapsible Sidebar**: Adaptive navigation for all screen sizes
- **Responsive Grids**: Flexible layouts that adapt to device size
- **Mobile Navigation**: Swipe-friendly interface elements

### ⚙️ **Functional Settings Panel**
- **Profile Management**: Update user information and preferences
- **Dashboard Preferences**: Toggle auto-refresh, notifications, and themes
- **Data Export**: Configure export formats and date ranges
- **Security Settings**: Password change functionality

### 🔔 **Smart Notifications System**
- **Real-time Alerts**: Campaign budget warnings and milestone notifications
- **Interactive Dropdown**: Click to view and manage notifications
- **Toast System**: Success, error, and info notifications
- **Auto-dismiss**: Notifications with automatic cleanup

### 📈 **Performance Analytics**
- **Conversion Tracking**: Monitor conversion rates and trends
- **Channel Performance**: Analyze performance by traffic source
- **Funnel Analysis**: Track customer journey through conversion funnel
- **Revenue Analytics**: Comprehensive revenue tracking and forecasting

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/THEAPS1/admybrand-demo.git
   cd admybrand-demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Theme**: Custom dark/light theme system

## 📁 Project Structure

```
src/
├── components/
│   ├── Charts/
│   │   ├── AreaChart.tsx
│   │   ├── BarChart.tsx
│   │   ├── DonutChart.tsx
│   │   └── LineChart.tsx
│   ├── Layout/
│   │   ├── Header.tsx
│   │   └── Sidebar.tsx
│   ├── UI/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── LoadingSkeleton.tsx
│   │   ├── Modal.tsx
│   │   └── Toast.tsx
│   └── MetricsCards.tsx
├── data/
│   └── mockData.ts
├── hooks/
│   ├── useTheme.ts
│   └── useToast.ts
├── types/
│   └── index.ts
└── App.tsx
```

## 🎨 Key Features

### **Dashboard Overview**
- Real-time metrics display
- Interactive KPI cards
- Responsive grid layout
- Auto-refresh functionality

### **Analytics Section**
- Advanced chart visualizations
- Trend analysis
- Performance metrics
- Export capabilities

### **Campaign Management**
- Campaign data table
- Status tracking
- Performance metrics
- Export functionality

### **Reports & Insights**
- Comprehensive reporting
- Channel performance analysis
- Customer journey tracking
- Data visualization

### **Performance Metrics**
- Conversion rate tracking
- Source performance analysis
- Channel optimization
- Funnel analysis

### **Settings Panel**
- User profile management
- Dashboard preferences
- Data export configuration
- Security settings

## 📱 Responsive Design

The dashboard is fully responsive and optimized for:

- **Mobile Phones** (320px - 640px)
- **Tablets** (640px - 1024px)
- **Desktop** (1024px+)
- **Large Displays** (1280px+)

### **Mobile Features**
- Collapsible sidebar navigation
- Touch-friendly interface
- Swipe gestures
- Optimized typography

## 🎯 Usage

### **Navigation**
- Use the sidebar to navigate between sections
- Click the hamburger menu on mobile
- Toggle sidebar collapse on desktop

### **Charts**
- Hover over chart elements for detailed information
- Click the maximize button for fullscreen view
- Press ESC to exit fullscreen mode

### **Settings**
- Access settings from the sidebar
- Toggle preferences with interactive switches
- Export data in various formats

### **Notifications**
- Click the bell icon to view notifications
- Notifications show real-time updates
- Click outside to dismiss

## 🔧 Customization

### **Adding New Charts**
1. Create a new component in `src/components/Charts/`
2. Import and use in the desired section
3. Add data to `src/data/mockData.ts`

### **Modifying Themes**
- Edit `src/index.css` for global styles
- Update `src/hooks/useTheme.ts` for theme logic
- Modify component styles in respective files

### **Adding New Sections**
1. Create new components in `src/components/`
2. Add navigation items in `src/components/Layout/Sidebar.tsx`
3. Update routing logic in `src/App.tsx`

## 📊 Data Structure

The dashboard uses mock data that can be easily replaced with real API calls:

```typescript
interface Campaign {
  id: string;
  name: string;
  status: 'active' | 'paused' | 'completed';
  budget: number;
  spend: number;
  impressions: number;
  clicks: number;
  ctr: number;
  conversions: number;
  roas: number;
  source: string;
  startDate: string;
  endDate: string;
}
```

## 🚀 Deployment

### **Build for Production**
```bash
npm run build
```

### **Preview Production Build**
```bash
npm run preview
```

### **Deploy to Vercel**
```bash
npm install -g vercel
vercel
```

### **Deploy to Netlify**
```bash
npm run build
# Upload dist/ folder to Netlify
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - Frontend framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Recharts](https://recharts.org/) - Chart library
- [Lucide React](https://lucide.dev/) - Icon library
- [Vite](https://vitejs.dev/) - Build tool

## 📞 Support

If you have any questions or need support, please:

- Open an issue on GitHub
- Contact the development team
- Check the documentation

---

**Made with ❤️ by the ADmyBRAND Team**

[![GitHub stars](https://img.shields.io/github/stars/THEAPS1/admybrand-demo?style=social)](https://github.com/THEAPS1/admybrand-demo)
[![GitHub forks](https://img.shields.io/github/forks/THEAPS1/admybrand-demo?style=social)](https://github.com/THEAPS1/admybrand-demo)
[![GitHub issues](https://img.shields.io/github/issues/THEAPS1/admybrand-demo)](https://github.com/THEAPS1/admybrand-demo/issues)
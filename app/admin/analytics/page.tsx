'use client';

import { TrendingUp, Users, BookOpen, Activity, Calendar, Award, Clock, Target } from 'lucide-react';
import './analytics.css';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function AnalyticsPage() {
  // Monthly user growth data
  const monthlyUsers = [
    { month: 'Jan', users: 850, active: 680 },
    { month: 'Feb', users: 920, active: 740 },
    { month: 'Mar', users: 1050, active: 850 },
    { month: 'Apr', users: 1150, active: 920 },
    { month: 'May', users: 1180, active: 950 },
    { month: 'Jun', users: 1247, active: 1000 }
  ];

  // Course completion rates
  const completionData = [
    { name: 'Full Stack', rate: 68 },
    { name: 'Cloud Arch', rate: 72 },
    { name: 'ML Engineer', rate: 61 },
    { name: 'DevOps', rate: 75 },
    { name: 'Cyber Sec', rate: 58 },
    { name: 'Data Sci', rate: 65 }
  ];

  // Platform usage by category
  const categoryData = [
    { name: 'Web Development', value: 420 },
    { name: 'Cloud & DevOps', value: 280 },
    { name: 'Data & AI', value: 245 },
    { name: 'Mobile Dev', value: 180 },
    { name: 'Security', value: 122 }
  ];

  // Weekly activity
  const weeklyActivity = [
    { day: 'Mon', logins: 320, completions: 45 },
    { day: 'Tue', logins: 380, completions: 52 },
    { day: 'Wed', logins: 420, completions: 58 },
    { day: 'Thu', logins: 390, completions: 48 },
    { day: 'Fri', logins: 350, completions: 42 },
    { day: 'Sat', logins: 280, completions: 35 },
    { day: 'Sun', logins: 240, completions: 30 }
  ];

  const COLORS = ['#F09134', '#a78bfa', '#60a5fa', '#34d399', '#fbbf24'];

  const stats = [
    {
      title: 'Avg Session Time',
      value: '24.5 min',
      change: '+3.2 min',
      icon: Clock,
      color: 'primary'
    },
    {
      title: 'Course Completions',
      value: '1,842',
      change: '+12%',
      icon: Award,
      color: 'secondary'
    },
    {
      title: 'Active Today',
      value: '342',
      change: '+8%',
      icon: Activity,
      color: 'accent'
    },
    {
      title: 'Avg Progress',
      value: '67%',
      change: '+5%',
      icon: Target,
      color: 'goal'
    }
  ];

  return (
    <div className="analytics-page">
      {/* Header */}
      <div className="analytics-header">
        <div>
          <h1 className="analytics-title">Platform Analytics</h1>
          <p className="analytics-subtitle">Track performance metrics and user engagement</p>
        </div>
        <div className="date-badge">
          <Calendar size={16} />
          <span>Last 6 Months</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="stat-card">
              <div className="stat-card-header">
                <h3 className="stat-card-title">{stat.title}</h3>
                <div className={`stat-icon stat-icon-${stat.color}`}>
                  <Icon size={20} />
                </div>
              </div>
              <div className="stat-card-value">
                <span className="stat-number">{stat.value}</span>
                <span className="stat-trend stat-trend-up">{stat.change}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Grid */}
      <div className="charts-grid">
        {/* User Growth Chart */}
        <div className="chart-card chart-card-wide">
          <h3 className="chart-title">
            <Users size={20} />
            User Growth Trends
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyUsers}>
              <CartesianGrid strokeDasharray="3 3" stroke="#57534e" />
              <XAxis dataKey="month" stroke="#a8a29e" />
              <YAxis stroke="#a8a29e" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#292524', 
                  border: '1px solid #57534e',
                  borderRadius: '0.5rem'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="users" 
                stroke="#F09134" 
                strokeWidth={3}
                name="Total Users"
              />
              <Line 
                type="monotone" 
                dataKey="active" 
                stroke="#60a5fa" 
                strokeWidth={3}
                name="Active Users"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Completion Rates */}
        <div className="chart-card">
          <h3 className="chart-title">
            <Award size={20} />
            Completion Rates
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={completionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#57534e" />
              <XAxis dataKey="name" stroke="#a8a29e" />
              <YAxis stroke="#a8a29e" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#292524', 
                  border: '1px solid #57534e',
                  borderRadius: '0.5rem'
                }}
              />
              <Bar dataKey="rate" fill="#a78bfa" name="Completion %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Category Distribution */}
        <div className="chart-card">
          <h3 className="chart-title">
            <BookOpen size={20} />
            Learning Categories
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#292524', 
                  border: '1px solid #57534e',
                  borderRadius: '0.5rem'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Weekly Activity */}
        <div className="chart-card chart-card-wide">
          <h3 className="chart-title">
            <TrendingUp size={20} />
            Weekly Activity
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyActivity}>
              <CartesianGrid strokeDasharray="3 3" stroke="#57534e" />
              <XAxis dataKey="day" stroke="#a8a29e" />
              <YAxis stroke="#a8a29e" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#292524', 
                  border: '1px solid #57534e',
                  borderRadius: '0.5rem'
                }}
              />
              <Legend />
              <Bar dataKey="logins" fill="#F09134" name="Daily Logins" />
              <Bar dataKey="completions" fill="#34d399" name="Completions" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
'use client';

import { Users, Map, BookOpen, TrendingUp, Settings, Shield, AlertCircle, Activity, CheckCircle, Clock, UserPlus, FolderPlus, ChevronRight } from 'lucide-react';
import './dashboard.css';
import Link from 'next/link';

export default function AdminDashboardPage() {
  const admin = {
    username: 'Admin',
    email: 'admin@pathdev.com',
    role: 'System Administrator'
  };

  const stats = {
    totalUsers: 1247,
    activeRoadmaps: 34,
    totalCourses: 156,
  };

  const recentActivity = [
    {
      title: 'New User Registration',
      description: '15 new users registered today',
      time: '10 minutes ago',
      icon: 'UserPlus',
      type: 'info'
    },
    {
      title: 'Roadmap Published',
      description: 'Cloud Architecture roadmap went live',
      time: '1 hour ago',
      icon: 'CheckCircle',
      type: 'success'
    },
    {
      title: 'System Maintenance',
      description: 'Scheduled backup completed successfully',
      time: '3 hours ago',
      icon: 'Settings',
      type: 'info'
    },
    {
      title: 'Course Updated',
      description: 'React Advanced Concepts content refreshed',
      time: '5 hours ago',
      icon: 'BookOpen',
      type: 'info'
    }
  ];

  const userGrowth = [
    { period: 'Today', count: 15, growth: '+12%' },
    { period: 'This Week', count: 89, growth: '+18%' },
    { period: 'This Month', count: 342, growth: '+24%' }
  ];

  const popularRoadmaps = [
    {
      title: 'Full Stack Development',
      enrollments: 456,
      completion: 68,
      status: 'Active'
    },
    {
      title: 'Cloud Architecture',
      enrollments: 312,
      completion: 72,
      status: 'Active'
    },
    {
      title: 'Machine Learning Engineer',
      enrollments: 289,
      completion: 61,
      status: 'Active'
    },
    {
      title: 'DevOps Professional',
      enrollments: 234,
      completion: 75,
      status: 'Active'
    }
  ];

  const systemMetrics = [
    { label: 'API Response Time', value: '124ms', status: 'good' },
    { label: 'Database Queries', value: '1.2k/min', status: 'good' },
    { label: 'Active Sessions', value: '342', status: 'good' },
    { label: 'Error Rate', value: '0.02%', status: 'good' }
  ];

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  const getActivityIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      UserPlus,
      CheckCircle,
      Settings,
      BookOpen,
      AlertCircle,
      Clock
    };
    return icons[iconName] || Activity;
  };

  return (
    <div className="admin-dashboard-page">
      {/* Header */}
      <div className="admin-header">
        <div className="header-content">
          <div>
            <h1 className="admin-title">
              {getGreeting()}, {admin.username}!
            </h1>
            <p className="admin-subtitle">
              Manage platform operations and monitor system performance
            </p>
          </div>
          <div className="admin-badge">
            <Shield size={16} />
            <span>{admin.role}</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-card-header">
            <h3 className="stat-card-title">Total Users</h3>
            <div className="stat-icon stat-icon-primary">
              <Users size={20} />
            </div>
          </div>
          <div className="stat-card-value">
            <span className="stat-number">{stats.totalUsers.toLocaleString()}</span>
            <span className="stat-trend stat-trend-up">+12.5%</span>
          </div>
          <p className="stat-description">Registered accounts</p>
        </div>

        <div className="stat-card">
          <div className="stat-card-header">
            <h3 className="stat-card-title">Total Roadmaps</h3>
            <div className="stat-icon stat-icon-accent">
              <BookOpen size={20} />
            </div>
          </div>
          <div className="stat-card-value">
            <span className="stat-number">{stats.totalCourses}</span>
            <span className="stat-trend stat-trend-up">+8</span>
          </div>
          <p className="stat-description">Available resources</p>
        </div>

        <div className="stat-card">
          <div className="stat-card-header">
            <h3 className="stat-card-title">Active Roadmaps</h3>
            <div className="stat-icon stat-icon-secondary">
              <Map size={20} />
            </div>
          </div>
          <div className="stat-card-value">
            <span className="stat-number">{stats.activeRoadmaps}</span>
            <span className="stat-trend stat-trend-up">+3</span>
          </div>
          <p className="stat-description">Published learning paths</p>
        </div>
      </div>

      {/* Content Grid - First Row */}
      <div className="content-grid">
        {/* User Growth */}
        <div className="content-card">
          <h3 className="content-card-title">User Growth</h3>
          <div className="growth-list">
            {userGrowth.map((item, index) => (
              <div key={index} className="growth-item">
                <div className="growth-info">
                  <p className="growth-period">{item.period}</p>
                  <p className="growth-count">{item.count} new users</p>
                </div>
                <span className="growth-badge">{item.growth}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="content-card">
          <h3 className="content-card-title">Recent Activity</h3>
          <div className="activity-list">
            {recentActivity.map((activity, index) => {
              const IconComponent = getActivityIcon(activity.icon);
              return (
                <div key={index} className="activity-item">
                  <div className={`activity-icon activity-icon-${['primary', 'secondary', 'accent', 'goal'][index % 4]}`}>
                    <IconComponent size={18} />
                  </div>
                  <div className="activity-content">
                    <p className="activity-title">{activity.title}</p>
                    <p className="activity-meta">{activity.description}</p>
                    <p className="activity-time">{activity.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content Grid - Second Row */}
      <div className="content-grid">
        {/* Popular Roadmaps */}
        <div className="content-card content-card-wide">
          <div className="card-header-with-action">
            <h3 className="content-card-title">Popular Roadmaps</h3>
            <Link href="/admin/roadmap" className="view-all-link">
              View All <ChevronRight size={16} />
            </Link>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Roadmap</th>
                  <th>Enrollments</th>
                  <th>Avg. Completion</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {popularRoadmaps.map((roadmap, index) => (
                  <tr key={index}>
                    <td className="table-primary">{roadmap.title}</td>
                    <td>{roadmap.enrollments}</td>
                    <td>
                      <div className="completion-cell">
                        <div className="mini-progress">
                          <div 
                            className="mini-progress-fill" 
                            style={{ width: `${roadmap.completion}%` }}
                          ></div>
                        </div>
                        <span>{roadmap.completion}%</span>
                      </div>
                    </td>
                    <td>
                      <span className="status-badge status-active">
                        {roadmap.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
'use client';

import { Map, BookOpen, Target, TrendingUp, User, Award, CheckCircle, Clock, ChevronRight, MessageSquare } from 'lucide-react';
import './dashboard.css';
import Link from 'next/link';

export default function DashboardPage() {
  const user = {
    username: 'Raymund Caolboy',
    email: 'caolboy@pathdev.com'
  };

  const stats = {
    totalRoadmaps: 12,
    completedMilestones: 48,
    averageProgress: 67,
    careerGoals: 5
  };

  const recentActivity = [
    {
      title: 'Completed Python Basics',
      description: 'Finished milestone in Backend Development path',
      time: '2 hours ago',
      icon: 'CheckCircle'
    },
    {
      title: 'Started React Course',
      description: 'Began new milestone in Frontend Development',
      time: '5 hours ago',
      icon: 'BookOpen'
    },
    {
      title: 'Updated Career Goal',
      description: 'Modified target role to Full Stack Developer',
      time: '1 day ago',
      icon: 'Target'
    },
    {
      title: 'Achievement Unlocked',
      description: 'Earned "Consistent Learner" badge',
      time: '2 days ago',
      icon: 'Award'
    }
  ];

  const activeRoadmaps = [
    {
      title: 'Frontend Development',
      progress: 75,
      milestones: 12,
      completed: 9
    },
    {
      title: 'Backend Development',
      progress: 60,
      milestones: 10,
      completed: 6
    },
    {
      title: 'DevOps Engineering',
      progress: 30,
      milestones: 8,
      completed: 2
    }
  ];

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  const getActivityIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      CheckCircle,
      BookOpen,
      Target,
      Award,
      Clock
    };
    return icons[iconName] || Clock;
  };

  return (
    <div className="dashboard-page">
      {/* Header */}
      <div className="dashboard-header">
        <div className="header-content">
          <div>
            <h1 className="dashboard-title">
              {getGreeting()}, {user.username}!
            </h1>
            <p className="dashboard-subtitle">
              Track your progress and continue your tech career journey
            </p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-card-header">
            <h3 className="stat-card-title">Total Roadmaps</h3>
            <div className="stat-icon stat-icon-primary">
              <Map size={20} />
            </div>
          </div>
          <div className="stat-card-value">
            <span className="stat-number">{stats.totalRoadmaps}</span>
          </div>
          <p className="stat-description">Active learning paths</p>
        </div>

        <div className="stat-card">
          <div className="stat-card-header">
            <h3 className="stat-card-title">Completed</h3>
            <div className="stat-icon stat-icon-secondary">
              <CheckCircle size={20} />
            </div>
          </div>
          <div className="stat-card-value">
            <span className="stat-number">{stats.completedMilestones}</span>
          </div>
          <p className="stat-description">Milestones achieved</p>
        </div>

        <div className="stat-card">
          <div className="stat-card-header">
            <h3 className="stat-card-title">Progress</h3>
            <div className="stat-icon stat-icon-accent">
              <TrendingUp size={20} />
            </div>
          </div>
          <div className="stat-card-value">
            <span className="stat-number">{stats.averageProgress}%</span>
          </div>
          <p className="stat-description">Overall completion</p>
        </div>

        <div className="stat-card">
          <div className="stat-card-header">
            <h3 className="stat-card-title">Career Goals</h3>
            <div className="stat-icon stat-icon-goal">
              <Target size={20} />
            </div>
          </div>
          <div className="stat-card-value">
            <span className="stat-number">{stats.careerGoals}</span>
          </div>
          <p className="stat-description">Goals set</p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="content-grid">
        {/* Active Roadmaps */}
        <div className="content-card">
          <h3 className="content-card-title">Active Roadmaps</h3>
          <div className="roadmap-list">
            {activeRoadmaps.map((roadmap, index) => (
              <div key={index} className="roadmap-item">
                <div className="roadmap-header">
                  <h4 className="roadmap-title">{roadmap.title}</h4>
                  <span className="roadmap-progress-text">{roadmap.progress}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${roadmap.progress}%` }}
                  ></div>
                </div>
                <p className="roadmap-meta">
                  {roadmap.completed} of {roadmap.milestones} milestones completed
                </p>
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

      {/* Quick Actions */}
      <div className="content-card">
        <h3 className="content-card-title">Quick Actions</h3>
        <div className="action-grid">
          <Link href="/user/roadmap" className="action-card">
            <div className="action-icon action-icon-1">
              <Map size={24} />
            </div>
            <p className="action-label">Browse Roadmaps</p>
          </Link>

          <Link href="/user/progress" className="action-card">
            <div className="action-icon action-icon-3">
              <TrendingUp size={24} />
            </div>
            <p className="action-label">View Progress</p>
          </Link>

          <Link href="/user/chat" className="action-card">
            <div className="action-icon action-icon-2">
              <MessageSquare size={24} />
            </div>
            <p className="action-label">AI Chat</p>
          </Link>

          <Link href="/user/profile" className="action-card">
            <div className="action-icon action-icon-4">
              <User size={24} />
            </div>
            <p className="action-label">Edit Profile</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
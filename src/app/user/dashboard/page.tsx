import React from 'react';
import { BookOpen, User, Clock, TrendingUp, Award, Target, ArrowRight } from 'lucide-react';
import './dashboard.css';
import Sidebar from '../sidebar';

export default function StudentDashboard() {
  const stats = [
    { icon: BookOpen, label: 'Courses Completed', value: '12', change: '+3', color: 'cyan' },
    { icon: User, label: 'Skills Acquired', value: '24', change: '+5', color: 'cyan' },
    { icon: Clock, label: 'Study Hours', value: '186', change: '+12', color: 'cyan' },
    { icon: TrendingUp, label: 'Career Progress', value: '68%', change: '+8%', color: 'cyan' }
  ];

  const currentCourses = [
    {
      title: 'Advanced Web Development',
      instructor: 'Mr. John Doe',
      progress: 75,
      deadline: 'Assignment due in 3 days',
      color: 'blue'
    },
    {
      title: 'Database Management Systems',
      instructor: 'Dr. Jane Smith',
      progress: 60,
      deadline: 'Quiz on Friday',
      color: 'blue'
    },
    {
      title: 'Software Engineering Principles',
      instructor: 'Prof. Frank Lee',
      progress: 45,
      deadline: 'Project proposal due next week',
      color: 'blue'
    }
  ];

  const roadmap = [
    { title: 'Complete Frontend Fundamentals', completed: true },
    { title: 'Build 3 Portfolio Projects', completed: true },
    { title: 'Master React & TypeScript', current: true },
    { title: 'Learn Backend Development', completed: false },
    { title: 'Complete Capstone Project', completed: false }
  ];

  const quickActions = [
    { icon: BookOpen, label: 'Browse Courses' },
    { icon: Target, label: 'Update Career Goals' },
    { icon: Award, label: 'View Achievements' }
  ];

  return (
    <div className="dashboard-container">
    <Sidebar activePage="dashboard" />
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">
            Welcome back, <span className="highlight">Student</span>!
          </h1>
          <p className="dashboard-subtitle">Track your progress and continue your tech career journey</p>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-header">
              <stat.icon className="stat-icon" />
              <span className={`stat-change ${stat.color}`}>{stat.change}</span>
            </div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="content-grid">
        <div className="main-content">
          <div className="roadmap-section">
            <div className="section-header">
                <h2 className="section-title">Current Courses</h2>
                <button className="view-all-btn">
                View All <ArrowRight size={16} />
                </button>
            </div>

            <div className="courses-list">
                {currentCourses.map((course, index) => (
                <div key={index} className="course-card">
                    <div className="course-header">
                    <div>
                        <h3 className="course-title">{course.title}</h3>
                        <p className="course-instructor">{course.instructor}</p>
                    </div>
                    <span className={`progress-badge ${course.color}`}>{course.progress}%</span>
                    </div>
                    <div className="progress-bar">
                    <div className={`progress-fill ${course.color}`} style={{width: `${course.progress}%`}}></div>
                    </div>
                    <div className="course-deadline">
                    <Clock size={14} />
                    <span>{course.deadline}</span>
                    </div>
                </div>
                ))}
            </div>
          </div>

          <div className="roadmap-section">
            <div className="roadmap-header">
              <Target className="roadmap-icon" />
              <h2 className="section-title">Career Roadmap Progress</h2>
            </div>
            <div className="roadmap-list">
              {roadmap.map((item, index) => (
                <div key={index} className={`roadmap-item ${item.completed ? 'completed' : ''} ${item.current ? 'current' : ''}`}>
                  <div className="roadmap-checkbox">
                    {item.completed && <div className="checkmark">✓</div>}
                  </div>
                  <span className="roadmap-title">{item.title}</span>
                  {item.current && <span className="current-badge">Current</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="quick-actions-container">
          <div className="quick-actions-section">
            <h3 className="quick-actions-title">Quick Actions</h3>
            <div className="quick-actions">
              {quickActions.map((action, index) => (
                <button key={index} className="action-btn">
                  <action.icon size={18} />
                  {action.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
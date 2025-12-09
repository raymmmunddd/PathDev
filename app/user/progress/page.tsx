'use client';

import { useState, useEffect } from 'react';
import { Map, ChevronRight, BookOpen, Clock, CheckCircle, TrendingUp } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { getEnrolledRoadmaps } from '../services/progressService';
import { EnrolledRoadmap } from '../types/progress';
import './progress.css';

export default function ProgressPage() {
  const router = useRouter();
  const [enrolledRoadmaps, setEnrolledRoadmaps] = useState<EnrolledRoadmap[]>([]);

  useEffect(() => {
    const data = getEnrolledRoadmaps();
    setEnrolledRoadmaps(data);
  }, []);

  const handleRoadmapClick = (roadmapId: string) => {
    router.push(`/user/progress/${roadmapId}`);
  };

  const getProgressColor = (progress: number) => {
    if (progress < 30) return 'progress-low';
    if (progress < 70) return 'progress-medium';
    return 'progress-high';
  };

  return (
    <div className="progress-page">
      {/* Header */}
      <div className="progress-header">
        <div className="header-content">
          <div>
            <h1 className="progress-title">My Learning Progress</h1>
            <p className="progress-subtitle">
              Continue your journey and track your achievements
            </p>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="stats-overview">
        <div className="stat-box">
          <div className="stat-icon stat-icon-primary">
            <Map size={24} />
          </div>
          <div className="stat-info">
            <span className="stat-label">Enrolled Roadmaps</span>
            <span className="stat-value">{enrolledRoadmaps.length}</span>
          </div>
        </div>

        <div className="stat-box">
          <div className="stat-icon stat-icon-secondary">
            <CheckCircle size={24} />
          </div>
          <div className="stat-info">
            <span className="stat-label">Completed Lessons</span>
            <span className="stat-value">
              {enrolledRoadmaps.reduce((acc, r) => acc + r.completedLessons, 0)}
            </span>
          </div>
        </div>

        <div className="stat-box">
          <div className="stat-icon stat-icon-accent">
            <TrendingUp size={24} />
          </div>
          <div className="stat-info">
            <span className="stat-label">Average Progress</span>
            <span className="stat-value">
              {Math.round(enrolledRoadmaps.reduce((acc, r) => acc + r.progress, 0) / enrolledRoadmaps.length)}%
            </span>
          </div>
        </div>
      </div>

      {/* Enrolled Roadmaps */}
      <div className="enrolled-section">
        <h2 className="section-title">Your Roadmaps</h2>
        <div className="roadmap-list">
          {enrolledRoadmaps.map((roadmap) => (
            <div 
              key={roadmap.id} 
              className="enrolled-card"
              onClick={() => handleRoadmapClick(roadmap.id)}
            >
              <div className="enrolled-header">
                <div className="enrolled-icon">
                  <Map size={28} />
                </div>
                <div className="enrolled-info">
                  <h3 className="enrolled-title">{roadmap.title}</h3>
                  <p className="enrolled-meta">
                    {roadmap.completedLessons} of {roadmap.totalLessons} lessons completed
                  </p>
                </div>
                <ChevronRight size={24} className="enrolled-arrow" />
              </div>

              <div className="progress-section">
                <div className="progress-info">
                  <span className="progress-label">Progress</span>
                  <span className={`progress-percentage ${getProgressColor(roadmap.progress)}`}>
                    {roadmap.progress}%
                  </span>
                </div>
                <div className="progress-bar-container">
                  <div 
                    className={`progress-bar-fill ${getProgressColor(roadmap.progress)}`}
                    style={{ width: `${roadmap.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="enrolled-footer">
                <div className="footer-item">
                  <BookOpen size={16} />
                  <span>Current: {roadmap.currentLesson}</span>
                </div>
                <div className="footer-item">
                  <Clock size={16} />
                  <span>{roadmap.timeSpent}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
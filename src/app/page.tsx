'use client';

import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import './page.css'

export default function LandingPage() {
  const handleGetStarted = () => {
    window.location.href = '/auth';
  };

  const handleExplorePathways = () => {
    console.log('Explore pathways clicked');
  };

  return (
    <div className="landing-container">
      <div className="landing-logo">
        <span>  
          {"</>"}{/* Logo */} 
          pathDev
        </span>
      </div>

      <div className="landing-content">
        <div className="landing-badge">
          <Sparkles size={18} />
          <span>Empowering Tech Students at Gordon College</span>
        </div>

        <h1 className="landing-headline">
          Navigate Your<br />
          <span className="landing-headline-highlight">Tech Career Journey</span>
        </h1>

        <p className="landing-description">
          Discover personalized career pathways, map your academic progress, 
          and build the skills that matter—all aligned with your curriculum.
        </p>

        {/* Buttons */}
        <div className="landing-buttons">
          <button onClick={handleGetStarted} className="landing-btn-primary">
            Get Started
            <ArrowRight size={20} />
          </button>
          <button onClick={handleExplorePathways} className="landing-btn-secondary">
            Explore Pathways
          </button>
        </div>

        {/* Stats */}
        <div className="landing-stats">
          <div className="landing-stat">
            <div className="landing-stat-number">15+</div>
            <div className="landing-stat-label">Career Paths</div>
          </div>
          <div className="landing-stat">
            <div className="landing-stat-number">500+</div>
            <div className="landing-stat-label">Resources</div>
          </div>
          <div className="landing-stat">
            <div className="landing-stat-number">100%</div>
            <div className="landing-stat-label">Aligned</div>
          </div>
        </div>
      </div>
    </div>
  );
}
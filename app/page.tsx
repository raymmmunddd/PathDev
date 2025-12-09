'use client'

import React from 'react';
import { ArrowRight, Map, BookOpen, TrendingUp, Users, Briefcase, Target } from 'lucide-react';
import './pathdev.css';

export default function PathDevLanding() {
  return (
    <div className="landing-page">
      <div className="gradient-bg"></div>
      <div className="bg-overlay"></div>
      <div className="floating-orb orb-1"></div>
      <div className="floating-orb orb-2"></div>
      <div className="floating-orb orb-3"></div>
      <div className="floating-orb orb-4"></div>
      
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">{"{pathdev}"}</span>
          </div>
          <div className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#about" className="nav-link">About</a>
            <a href="/role" className="btn-primary btn-nav">Get Started</a>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <section id="home" className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                Elevate Your
                <span className="title-gradient"> Tech Career</span>
              </h1>
              
              <p className="hero-description">
                A personalized roadmapping platform aligned with academic curriculums to help you discover and navigate your path in technology.
              </p>
              
              <div className="hero-buttons">
                <a href="/role" className="btn-primary btn-large">
                  <span>Start Your Journey</span>
                  <ArrowRight className="btn-icon" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="features-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Powerful Features</h2>
              <p className="section-description">
                Everything you need to plan and achieve your tech career goals
              </p>
            </div>
            
            <div className="features-grid">
              <a href="/role" className="feature-card">
                <div className="feature-icon icon-primary">
                  <Map size={32} />
                </div>
                <h3 className="feature-title">Personalized Roadmaps</h3>
                <p className="feature-description">
                  Custom career paths aligned with your curriculum and goals, guiding you step-by-step.
                </p>
                <span className="feature-link">Explore roadmaps →</span>
              </a>

              <a href="/role" className="feature-card">
                <div className="feature-icon icon-primary">
                  <BookOpen size={32} />
                </div>
                <h3 className="feature-title">Academic Integration</h3>
                <p className="feature-description">
                  Seamlessly connect your coursework with real-world career opportunities.
                </p>
                <span className="feature-link">Learn more →</span>
              </a>

              <a href="/role" className="feature-card">
                <div className="feature-icon icon-primary">
                  <TrendingUp size={32} />
                </div>
                <h3 className="feature-title">Progress Tracking</h3>
                <p className="feature-description">
                  Monitor your development journey and celebrate milestones along the way.
                </p>
                <span className="feature-link">Track progress →</span>
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="why-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Why PathDev?</h2>
              <p className="section-description">
                Bridging the gap between education and career success with tools designed for tech students
              </p>
            </div>
            
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon icon-primary">
                  <Target size={32} />
                </div>
                <h3 className="benefit-title">Career Discovery</h3>
                <p className="benefit-description">
                  Explore diverse tech career paths and find the one that matches your interests and strengths.
                </p>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon icon-primary">
                  <Users size={32} />
                </div>
                <h3 className="benefit-title">Expert Guidance</h3>
                <p className="benefit-description">
                  Access curated resources and insights from industry professionals to accelerate your growth.
                </p>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon icon-primary">
                  <Briefcase size={32} />
                </div>
                <h3 className="benefit-title">Industry Aligned</h3>
                <p className="benefit-description">
                  Stay updated with current market demands and build skills that employers are looking for.
                </p>
              </div>
            </div>
            
            <div className="cta-section">
              <div className="cta-card">
                <h3 className="cta-title">Ready to Shape Your Future?</h3>
                <p className="cta-description">
                  Join students who are taking control of their tech career journey with PathDev
                </p>
                <a href="/role" className="btn-primary btn-large">
                  <span>Begin Your Path</span>
                  <ArrowRight className="btn-icon" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
'use client';

import { useState, useEffect } from 'react';
import { Map, X, BookOpen, Target, Clock, Award } from 'lucide-react';
import { getRoadmaps } from '../services/roadmapService';
import { Roadmap, Milestone } from '../types/roadmap';
import './roadmap.css';

export default function RoadmapPage() {
  const [roadmaps, setRoadmaps] = useState<Roadmap[]>([]);
  const [selectedRoadmap, setSelectedRoadmap] = useState<Roadmap | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalMounted, setIsModalMounted] = useState(false);

  useEffect(() => {
    // Fetch roadmaps when component mounts
    const data = getRoadmaps();
    setRoadmaps(data);
  }, []);

  const openModal = (roadmap: Roadmap) => {
    setSelectedRoadmap(roadmap);
    // Mount modal then trigger open state so CSS transitions can run
    setIsModalMounted(true);
    document.body.style.overflow = 'hidden';
    // Small delay to ensure the element is in the DOM before adding the "open" class
    requestAnimationFrame(() => setIsModalOpen(true));
  };

  const closeModal = () => {
    // Start closing animation, then unmount after transition duration
    setIsModalOpen(false);
    const timeout = 300; // should match --transition-base (300ms)
    setTimeout(() => {
      setIsModalMounted(false);
      setSelectedRoadmap(null);
      document.body.style.overflow = 'unset';
    }, timeout);
  };

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'difficulty-beginner';
      case 'Intermediate': return 'difficulty-intermediate';
      case 'Advanced': return 'difficulty-advanced';
      default: return '';
    }
  };

  return (
    <div className="roadmap-page">
      {/* Header */}
      <div className="roadmap-header">
        <div className="header-content">
          <div>
            <h1 className="roadmap-title">Career Roadmaps</h1>
            <p className="roadmap-subtitle">
              Choose your path and start your tech career journey
            </p>
          </div>
        </div>
      </div>

      {/* Roadmap Cards Grid */}
      <div className="roadmap-grid">
        {roadmaps.map((roadmap) => (
          <div 
            key={roadmap.id} 
            className="roadmap-card"
            onClick={() => openModal(roadmap)}
          >
            <div className="roadmap-card-icon">
              <Map size={32} />
            </div>
            
            <h3 className="roadmap-card-title">{roadmap.title}</h3>
            <p className="roadmap-card-description">{roadmap.description}</p>
            
            <div className="roadmap-card-meta">
              <div className="meta-item">
                <BookOpen size={16} />
                <span>{roadmap.milestones.length} Milestones</span>
              </div>
              <div className="meta-item">
                <Clock size={16} />
                <span>{roadmap.duration}</span>
              </div>
            </div>

            <div className="roadmap-card-footer">
              <span className={`difficulty-badge ${getDifficultyColor(roadmap.difficulty)}`}>
                {roadmap.difficulty}
              </span>
              <span className="view-details">View Details →</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalMounted && selectedRoadmap && (
        <div className={`modal-overlay ${isModalOpen ? 'open' : 'closing'}`} onClick={closeModal}>
          <div className={`modal-content ${isModalOpen ? 'open' : 'closing'}`} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <X size={24} />
            </button>

            {/* Modal Header */}
            <div className="modal-header">
              <div className="modal-icon">
                <Map size={40} />
              </div>
              <div>
                <h2 className="modal-title">{selectedRoadmap.title}</h2>
                <p className="modal-description">{selectedRoadmap.description}</p>
              </div>
            </div>

            {/* Modal Info */}
            <div className="modal-info">
              <div className="info-item">
                <BookOpen size={20} />
                <div>
                  <span className="info-label">Milestones</span>
                  <span className="info-value">{selectedRoadmap.milestones.length}</span>
                </div>
              </div>
              <div className="info-item">
                <Clock size={20} />
                <div>
                  <span className="info-label">Duration</span>
                  <span className="info-value">{selectedRoadmap.duration}</span>
                </div>
              </div>
              <div className="info-item">
                <Target size={20} />
                <div>
                  <span className="info-label">Difficulty</span>
                  <span className="info-value">{selectedRoadmap.difficulty}</span>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="modal-section">
              <h3 className="section-title">Skills You'll Learn</h3>
              <div className="skills-grid">
                {selectedRoadmap.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            {/* Milestones Section */}
            <div className="modal-section">
              <h3 className="section-title">Learning Path</h3>
              <div className="milestones-list">
                {selectedRoadmap.milestones.map((milestone, index) => (
                  <div key={milestone.id} className="milestone-item">
                    <div className="milestone-number">
                      {index + 1}
                    </div>
                    <div className="milestone-content">
                      <h4 className="milestone-title">{milestone.title}</h4>
                      <p className="milestone-description">{milestone.description}</p>
                      <div className="milestone-meta">
                        <span className="milestone-duration">
                          <Clock size={14} />
                          {milestone.estimatedTime}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Outcomes */}
            <div className="modal-section">
              <h3 className="section-title">Career Outcomes</h3>
              <div className="outcomes-list">
                {selectedRoadmap.careerOutcomes.map((outcome, index) => (
                  <div key={index} className="outcome-item">
                    <Award size={18} />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div className="modal-actions">
              <button className="btn-start-roadmap">
                Start This Roadmap
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
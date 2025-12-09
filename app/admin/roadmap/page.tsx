'use client';

import { useState, useEffect } from 'react';
import { Map, X, BookOpen, Target, Clock, Award, Plus, Trash2, Edit, AlertTriangle } from 'lucide-react';
import { getRoadmaps } from '../services/roadmapService';
import { Roadmap, Milestone } from '../types/roadmap';
import './roadmap.css';

export default function AdminRoadmapPage() {
  const [roadmaps, setRoadmaps] = useState<Roadmap[]>([]);
  const [selectedRoadmap, setSelectedRoadmap] = useState<Roadmap | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isViewModalMounted, setIsViewModalMounted] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleteModalMounted, setIsDeleteModalMounted] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isAddModalMounted, setIsAddModalMounted] = useState(false);
  const [roadmapToDelete, setRoadmapToDelete] = useState<Roadmap | null>(null);

  const [newRoadmap, setNewRoadmap] = useState({
    title: '',
    description: '',
    difficulty: 'Beginner',
    duration: '',
    skills: '',
    careerOutcomes: '',
    milestones: [{ title: '', description: '', estimatedTime: '' }]
  });

  useEffect(() => {
    const data = getRoadmaps();
    setRoadmaps(data);
  }, []);

  const openViewModal = (roadmap: Roadmap) => {
    setSelectedRoadmap(roadmap);
    setIsViewModalMounted(true);
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => setIsViewModalOpen(true));
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
    setTimeout(() => {
      setIsViewModalMounted(false);
      setSelectedRoadmap(null);
      document.body.style.overflow = 'unset';
    }, 300);
  };

  const openDeleteModal = (roadmap: Roadmap, e: React.MouseEvent) => {
    e.stopPropagation();
    setRoadmapToDelete(roadmap);
    setIsDeleteModalMounted(true);
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => setIsDeleteModalOpen(true));
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setTimeout(() => {
      setIsDeleteModalMounted(false);
      setRoadmapToDelete(null);
      document.body.style.overflow = 'unset';
    }, 300);
  };

  const openAddModal = () => {
    setIsAddModalMounted(true);
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => setIsAddModalOpen(true));
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
    setTimeout(() => {
      setIsAddModalMounted(false);
      setNewRoadmap({
        title: '',
        description: '',
        difficulty: 'Beginner',
        duration: '',
        skills: '',
        careerOutcomes: '',
        milestones: [{ title: '', description: '', estimatedTime: '' }]
      });
      document.body.style.overflow = 'unset';
    }, 300);
  };

  const handleDeleteRoadmap = () => {
    if (roadmapToDelete) {
      setRoadmaps(roadmaps.filter(r => r.id !== roadmapToDelete.id));
      closeDeleteModal();
    }
  };

  const handleAddMilestone = () => {
    setNewRoadmap({
      ...newRoadmap,
      milestones: [...newRoadmap.milestones, { title: '', description: '', estimatedTime: '' }]
    });
  };

  const handleRemoveMilestone = (index: number) => {
    setNewRoadmap({
      ...newRoadmap,
      milestones: newRoadmap.milestones.filter((_, i) => i !== index)
    });
  };

  const handleMilestoneChange = (index: number, field: string, value: string) => {
    const updatedMilestones = [...newRoadmap.milestones];
    updatedMilestones[index] = { ...updatedMilestones[index], [field]: value };
    setNewRoadmap({ ...newRoadmap, milestones: updatedMilestones });
  };

  const handleSubmitRoadmap = (e: React.FormEvent) => {
    e.preventDefault();
    
    const roadmapData: Roadmap = {
      id: `roadmap-${Date.now()}`,
      title: newRoadmap.title,
      description: newRoadmap.description,
      difficulty: newRoadmap.difficulty,
      duration: newRoadmap.duration,
      skills: newRoadmap.skills.split(',').map(s => s.trim()),
      careerOutcomes: newRoadmap.careerOutcomes.split(',').map(s => s.trim()),
      milestones: newRoadmap.milestones.map((m, i) => ({
        id: `milestone-${Date.now()}-${i}`,
        title: m.title,
        description: m.description,
        estimatedTime: m.estimatedTime,
        completed: false
      }))
    };

    setRoadmaps([...roadmaps, roadmapData]);
    closeAddModal();
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
    <div className="admin-roadmap-page">
      {/* Header */}
      <div className="admin-roadmap-header">
        <div className="header-content">
          <div>
            <h1 className="admin-roadmap-title">Manage Roadmaps</h1>
            <p className="admin-roadmap-subtitle">
              Create, edit, and manage career roadmaps for the platform
            </p>
          </div>
          <button className="btn-add-roadmap" onClick={openAddModal}>
            <Plus size={20} />
            Add New Roadmap
          </button>
        </div>
      </div>

      {/* Roadmap Cards Grid */}
      <div className="admin-roadmap-grid">
        {roadmaps.map((roadmap) => (
          <div 
            key={roadmap.id} 
            className="admin-roadmap-card"
            onClick={() => openViewModal(roadmap)}
          >
            <div className="card-actions">
              <button 
                className="btn-icon btn-delete"
                onClick={(e) => openDeleteModal(roadmap, e)}
                title="Delete roadmap"
              >
                <Trash2 size={18} />
              </button>
            </div>

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

      {/* View Modal */}
      {isViewModalMounted && selectedRoadmap && (
        <div className={`modal-overlay ${isViewModalOpen ? 'open' : 'closing'}`} onClick={closeViewModal}>
          <div className={`modal-content ${isViewModalOpen ? 'open' : 'closing'}`} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeViewModal}>
              <X size={24} />
            </button>

            <div className="modal-header">
              <div className="modal-icon">
                <Map size={40} />
              </div>
              <div>
                <h2 className="modal-title">{selectedRoadmap.title}</h2>
                <p className="modal-description">{selectedRoadmap.description}</p>
              </div>
            </div>

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

            <div className="modal-section">
              <h3 className="section-title">Skills You'll Learn</h3>
              <div className="skills-grid">
                {selectedRoadmap.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="modal-section">
              <h3 className="section-title">Learning Path</h3>
              <div className="milestones-list">
                {selectedRoadmap.milestones.map((milestone, index) => (
                  <div key={milestone.id} className="milestone-item">
                    <div className="milestone-number">{index + 1}</div>
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
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalMounted && roadmapToDelete && (
        <div className={`modal-overlay ${isDeleteModalOpen ? 'open' : 'closing'}`} onClick={closeDeleteModal}>
          <div className={`modal-content modal-small ${isDeleteModalOpen ? 'open' : 'closing'}`} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeDeleteModal}>
              <X size={24} />
            </button>

            <div className="delete-modal-content">
              <div className="delete-icon">
                <AlertTriangle size={48} />
              </div>
              <h2 className="delete-title">Delete Roadmap</h2>
              <p className="delete-message">
                Are you sure you want to delete <strong>{roadmapToDelete.title}</strong>? 
                This action cannot be undone and will affect all users enrolled in this roadmap.
              </p>
              <div className="delete-actions">
                <button className="btn-cancel" onClick={closeDeleteModal}>
                  Cancel
                </button>
                <button className="btn-delete-confirm" onClick={handleDeleteRoadmap}>
                  Delete Roadmap
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Roadmap Modal */}
      {isAddModalMounted && (
        <div className={`modal-overlay ${isAddModalOpen ? 'open' : 'closing'}`} onClick={closeAddModal}>
          <div className={`modal-content ${isAddModalOpen ? 'open' : 'closing'}`} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeAddModal}>
              <X size={24} />
            </button>

            <div className="modal-header">
              <div className="modal-icon">
                <Plus size={40} />
              </div>
              <div>
                <h2 className="modal-title">Add New Roadmap</h2>
                <p className="modal-description">Create a new career roadmap for students</p>
              </div>
            </div>

            <form onSubmit={handleSubmitRoadmap} className="roadmap-form">
              <div className="form-section">
                <h3 className="form-section-title">Basic Information</h3>
                
                <div className="form-group">
                  <label htmlFor="title">Roadmap Title *</label>
                  <input
                    type="text"
                    id="title"
                    value={newRoadmap.title}
                    onChange={(e) => setNewRoadmap({ ...newRoadmap, title: e.target.value })}
                    placeholder="e.g., Full Stack Development"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description">Description *</label>
                  <textarea
                    id="description"
                    value={newRoadmap.description}
                    onChange={(e) => setNewRoadmap({ ...newRoadmap, description: e.target.value })}
                    placeholder="Describe what students will learn in this roadmap"
                    rows={3}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="difficulty">Difficulty Level *</label>
                    <select
                      id="difficulty"
                      value={newRoadmap.difficulty}
                      onChange={(e) => setNewRoadmap({ ...newRoadmap, difficulty: e.target.value })}
                      required
                    >
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="duration">Duration *</label>
                    <input
                      type="text"
                      id="duration"
                      value={newRoadmap.duration}
                      onChange={(e) => setNewRoadmap({ ...newRoadmap, duration: e.target.value })}
                      placeholder="e.g., 6 months"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="skills">Skills (comma-separated) *</label>
                  <input
                    type="text"
                    id="skills"
                    value={newRoadmap.skills}
                    onChange={(e) => setNewRoadmap({ ...newRoadmap, skills: e.target.value })}
                    placeholder="e.g., React, Node.js, MongoDB"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="careerOutcomes">Career Outcomes (comma-separated) *</label>
                  <textarea
                    id="careerOutcomes"
                    value={newRoadmap.careerOutcomes}
                    onChange={(e) => setNewRoadmap({ ...newRoadmap, careerOutcomes: e.target.value })}
                    placeholder="e.g., Work as a Full Stack Developer, Build web applications"
                    rows={2}
                    required
                  />
                </div>
              </div>

              <div className="form-section">
                <div className="form-section-header">
                  <h3 className="form-section-title">Milestones</h3>
                  <button type="button" className="btn-add-milestone" onClick={handleAddMilestone}>
                    <Plus size={16} />
                    Add Milestone
                  </button>
                </div>

                <div className="milestones-form-list">
                  {newRoadmap.milestones.map((milestone, index) => (
                    <div key={index} className="milestone-form-item">
                      <div className="milestone-form-header">
                        <span className="milestone-form-number">{index + 1}</span>
                        {newRoadmap.milestones.length > 1 && (
                          <button
                            type="button"
                            className="btn-remove-milestone"
                            onClick={() => handleRemoveMilestone(index)}
                          >
                            <Trash2 size={16} />
                          </button>
                        )}
                      </div>

                      <div className="form-group">
                        <label>Milestone Title *</label>
                        <input
                          type="text"
                          value={milestone.title}
                          onChange={(e) => handleMilestoneChange(index, 'title', e.target.value)}
                          placeholder="e.g., Learn React Fundamentals"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label>Description *</label>
                        <textarea
                          value={milestone.description}
                          onChange={(e) => handleMilestoneChange(index, 'description', e.target.value)}
                          placeholder="Describe what will be covered in this milestone"
                          rows={2}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label>Estimated Time *</label>
                        <input
                          type="text"
                          value={milestone.estimatedTime}
                          onChange={(e) => handleMilestoneChange(index, 'estimatedTime', e.target.value)}
                          placeholder="e.g., 2 weeks"
                          required
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-actions">
                <button type="button" className="btn-cancel" onClick={closeAddModal}>
                  Cancel
                </button>
                <button type="submit" className="btn-submit">
                  Create Roadmap
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
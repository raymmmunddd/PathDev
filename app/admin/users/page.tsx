'use client';

import { useState } from 'react';
import { Users, X, Trash2, Mail, Calendar, TrendingUp, Map, CheckCircle, AlertTriangle } from 'lucide-react';
import './usermanagement.css';

interface User {
  id: string;
  name: string;
  email: string;
  joinedDate: string;
  totalRoadmaps: number;
  completedRoadmaps: number;
  overallProgress: number;
  activeRoadmaps: {
    title: string;
    progress: number;
    completedMilestones: number;
    totalMilestones: number;
  }[];
}

export default function UserManagementPage() {
  const [users, setUsers] = useState<User[]>([
    {
      id: '1',
      name: 'Raymund Caolboy',
      email: 'caolboy@pathdev.com',
      joinedDate: '2024-01-15',
      totalRoadmaps: 12,
      completedRoadmaps: 3,
      overallProgress: 67,
      activeRoadmaps: [
        { title: 'Frontend Development', progress: 75, completedMilestones: 9, totalMilestones: 12 },
        { title: 'Backend Development', progress: 60, completedMilestones: 6, totalMilestones: 10 },
        { title: 'DevOps Engineering', progress: 30, completedMilestones: 2, totalMilestones: 8 }
      ]
    },
    {
      id: '2',
      name: 'Aaron Sario',
      email: 'sario@pathdev.com',
      joinedDate: '2024-02-20',
      totalRoadmaps: 8,
      completedRoadmaps: 2,
      overallProgress: 45,
      activeRoadmaps: [
        { title: 'Full Stack Development', progress: 50, completedMilestones: 6, totalMilestones: 12 },
        { title: 'Machine Learning', progress: 25, completedMilestones: 3, totalMilestones: 10 }
      ]
    },
    {
      id: '3',
      name: 'John Smith',
      email: 'smith@pathdev.com',
      joinedDate: '2024-03-10',
      totalRoadmaps: 15,
      completedRoadmaps: 5,
      overallProgress: 82,
      activeRoadmaps: [
        { title: 'Cloud Architecture', progress: 90, completedMilestones: 9, totalMilestones: 10 },
        { title: 'Cybersecurity', progress: 70, completedMilestones: 7, totalMilestones: 10 }
      ]
    },
    {
      id: '4',
      name: 'Jane Doe',
      email: 'doe@pathdev.com',
      joinedDate: '2024-04-05',
      totalRoadmaps: 6,
      completedRoadmaps: 1,
      overallProgress: 38,
      activeRoadmaps: [
        { title: 'Data Science', progress: 40, completedMilestones: 4, totalMilestones: 10 },
        { title: 'Python Programming', progress: 85, completedMilestones: 8, totalMilestones: 9 }
      ]
    }
  ]);

  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isViewModalMounted, setIsViewModalMounted] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleteModalMounted, setIsDeleteModalMounted] = useState(false);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);

  const openViewModal = (user: User) => {
    setSelectedUser(user);
    // Mount modal first, then trigger open class so CSS transition runs
    setIsViewModalMounted(true);
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => setIsViewModalOpen(true));
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
    const timeout = 300; // match CSS --transition-base (300ms)
    setTimeout(() => {
      setIsViewModalMounted(false);
      setSelectedUser(null);
      document.body.style.overflow = 'unset';
    }, timeout);
  };

  const openDeleteModal = (user: User, e: React.MouseEvent) => {
    e.stopPropagation();
    setUserToDelete(user);
    setIsDeleteModalMounted(true);
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => setIsDeleteModalOpen(true));
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    const timeout = 300;
    setTimeout(() => {
      setIsDeleteModalMounted(false);
      setUserToDelete(null);
      document.body.style.overflow = 'unset';
    }, timeout);
  };

  const handleDeleteUser = () => {
    if (userToDelete) {
      setUsers(users.filter(u => u.id !== userToDelete.id));
      closeDeleteModal();
    }
  };

  return (
    <div className="user-management-page">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">User Management</h1>
          <p className="page-subtitle">View and manage all platform users</p>
        </div>
        <div className="header-stats">
          <div className="stat-badge">
            <Users size={20} />
            <span>{users.length} Total Users</span>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="table-card">
        <table className="users-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Joined Date</th>
              <th>Roadmaps</th>
              <th>Completed</th>
              <th>Progress</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} onClick={() => openViewModal(user)}>
                <td className="user-cell">
                  <div className="user-avatar">{user.name.charAt(0)}</div>
                  <span className="user-name">{user.name}</span>
                </td>
                <td className="email-cell">{user.email}</td>
                <td>{new Date(user.joinedDate).toLocaleDateString()}</td>
                <td>{user.totalRoadmaps}</td>
                <td>{user.completedRoadmaps}</td>
                <td>
                  <div className="progress-cell">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${user.overallProgress}%` }}
                      ></div>
                    </div>
                    <span className="progress-text">{user.overallProgress}%</span>
                  </div>
                </td>
                <td>
                  <button 
                    className="btn-delete-user"
                    onClick={(e) => openDeleteModal(user, e)}
                    title="Delete user"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View User Modal */}
      {isViewModalMounted && selectedUser && (
        <div className={`modal-overlay ${isViewModalOpen ? 'open' : 'closing'}`} onClick={closeViewModal}>
          <div className={`modal-content ${isViewModalOpen ? 'open' : 'closing'}`} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeViewModal}>
              <X size={24} />
            </button>

            {/* User Header */}
            <div className="modal-header">
              <div className="user-avatar-large">{selectedUser.name.charAt(0)}</div>
              <div>
                <h2 className="modal-title">{selectedUser.name}</h2>
                <div className="user-info">
                  <span className="info-item">
                    <Mail size={16} />
                    {selectedUser.email}
                  </span>
                  <span className="info-item">
                    <Calendar size={16} />
                    Joined {new Date(selectedUser.joinedDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Stats Overview */}
            <div className="stats-overview">
              <div className="stat-item">
                <Map size={20} />
                <div>
                  <span className="stat-label">Total Roadmaps</span>
                  <span className="stat-value">{selectedUser.totalRoadmaps}</span>
                </div>
              </div>
              <div className="stat-item">
                <CheckCircle size={20} />
                <div>
                  <span className="stat-label">Completed</span>
                  <span className="stat-value">{selectedUser.completedRoadmaps}</span>
                </div>
              </div>
              <div className="stat-item">
                <TrendingUp size={20} />
                <div>
                  <span className="stat-label">Overall Progress</span>
                  <span className="stat-value">{selectedUser.overallProgress}%</span>
                </div>
              </div>
            </div>

            {/* Active Roadmaps */}
            <div className="modal-section">
              <h3 className="section-title">Active Roadmaps</h3>
              <div className="roadmaps-list">
                {selectedUser.activeRoadmaps.map((roadmap, index) => (
                  <div key={index} className="roadmap-card">
                    <div className="roadmap-header">
                      <h4 className="roadmap-title">{roadmap.title}</h4>
                      <span className="progress-badge">{roadmap.progress}%</span>
                    </div>
                    <div className="progress-bar-large">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${roadmap.progress}%` }}
                      ></div>
                    </div>
                    <p className="roadmap-meta">
                      {roadmap.completedMilestones} of {roadmap.totalMilestones} milestones completed
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalMounted && userToDelete && (
        <div className={`modal-overlay ${isDeleteModalOpen ? 'open' : 'closing'}`} onClick={closeDeleteModal}>
          <div className={`modal-content modal-small ${isDeleteModalOpen ? 'open' : 'closing'}`} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeDeleteModal}>
              <X size={24} />
            </button>

            <div className="delete-modal-content">
              <div className="delete-icon">
                <AlertTriangle size={48} />
              </div>
              <h2 className="delete-title">Delete User</h2>
              <p className="delete-message">
                Are you sure you want to delete <strong>{userToDelete.name}</strong>? 
                This will permanently remove their account and all associated data.
              </p>
              <div className="delete-actions">
                <button className="btn-cancel" onClick={closeDeleteModal}>
                  Cancel
                </button>
                <button className="btn-delete-confirm" onClick={handleDeleteUser}>
                  Delete User
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
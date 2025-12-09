'use client';

import { useState } from 'react';
import { User, Mail, Calendar, Lock, Eye, EyeOff, CheckCircle } from 'lucide-react';
import './profile.css';

export default function ProfilePage() {
  // Hardcoded user data
  const [user] = useState({
    username: 'johndoe',
    email: 'john.doe@example.com',
    createdAt: '2024-01-15T08:30:00Z'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  // Form state
  const [newUsername, setNewUsername] = useState(user.username);
  const [newEmail, setNewEmail] = useState(user.email);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // Password visibility
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Feedback
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('success');

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewUsername(user.username);
    setNewEmail(user.email);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setMessage('');
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    setMessage('');

    // Basic validation
    if (newUsername.trim().length < 3) {
      setMessage('Username must be at least 3 characters');
      setMessageType('error');
      return;
    }

    if (!newEmail.includes('@')) {
      setMessage('Please enter a valid email address');
      setMessageType('error');
      return;
    }

    // Password validation if provided
    if (newPassword) {
      if (newPassword.length < 8) {
        setMessage('Password must be at least 8 characters');
        setMessageType('error');
        return;
      }

      if (newPassword !== confirmPassword) {
        setMessage('New passwords do not match');
        setMessageType('error');
        return;
      }

      if (!currentPassword) {
        setMessage('Current password is required to change password');
        setMessageType('error');
        return;
      }
    }

    // Success
    setShowSuccessModal(true);
    setIsEditing(false);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setMessage('');
  };

  const canSave = 
    (newUsername.trim() !== user.username || newEmail.trim() !== user.email) || 
    (currentPassword && newPassword && confirmPassword);

  return (
    <div className="profile-page">
      {/* Header */}
      <div className="profile-header">
        <div className="header-content">
          <div>
            <h1 className="profile-title">Profile Settings</h1>
            <p className="profile-subtitle">
              Manage your account settings and personal information
            </p>
          </div>
        </div>
      </div>

      {/* Profile Card */}
      <div className="profile-card">
        <div className="card-header">
          <div className="card-header-content">
            <User className="card-icon" size={24} />
            <h2 className="card-title">Profile Information</h2>
          </div>
          <p className="card-description">Your account details and personal information</p>
        </div>

        {!isEditing ? (
          <>
            <div className="profile-display">
              <div className="profile-avatar">
                <span className="avatar-text">
                  {user.username.substring(0, 2).toUpperCase()}
                </span>
              </div>
              
              <div className="profile-info">
                <div className="info-main">
                  <h3 className="username-display">{user.username}</h3>
                </div>
                <p className="username-label">{user.email}</p>
              </div>
            </div>

            <div className="info-grid">
              <div className="info-item">
                <label className="info-label">Username</label>
                <div className="info-value">
                  <User className="info-icon" size={18} />
                  <span>{user.username}</span>
                </div>
              </div>

              <div className="info-item">
                <label className="info-label">Email Address</label>
                <div className="info-value">
                  <Mail className="info-icon" size={18} />
                  <span>{user.email}</span>
                </div>
              </div>

              <div className="info-item">
                <label className="info-label">Member Since</label>
                <div className="info-value">
                  <Calendar className="info-icon" size={18} />
                  <span>{formatDate(user.createdAt)}</span>
                </div>
              </div>
            </div>

            <div className="button-group">
              <button className="edit-button" onClick={() => setIsEditing(true)}>
                <Lock size={18} />
                Edit Profile
              </button>
            </div>
          </>
        ) : (
          <div className="profile-form">
            <div className="form-section">
              <h3 className="form-section-title">Account Information</h3>
              
              <div className="form-group">
                <label className="form-label">Username</label>
                <div className="input-wrapper">
                  <User className="input-icon" size={18} />
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Enter username"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <div className="input-wrapper">
                  <Mail className="input-icon" size={18} />
                  <input
                    type="email"
                    className="form-input"
                    placeholder="Enter email address"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3 className="form-section-title">Change Password</h3>
              <p className="form-section-description">
                Leave password fields empty if you don't want to change it
              </p>

              <div className="form-group">
                <label className="form-label">Current Password</label>
                <div className="input-wrapper">
                  <Lock className="input-icon" size={18} />
                  <input
                    type={showCurrentPassword ? "text" : "password"}
                    className="form-input"
                    placeholder="Enter current password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  >
                    {showCurrentPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                  </button>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">New Password</label>
                  <div className="input-wrapper">
                    <Lock className="input-icon" size={18} />
                    <input
                      type={showNewPassword ? "text" : "password"}
                      className="form-input"
                      placeholder="Enter new password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                      {showNewPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                    </button>
                  </div>
                  <p className="form-hint">
                    Min 8 chars, uppercase, lowercase, number, symbol
                  </p>
                </div>

                <div className="form-group">
                  <label className="form-label">Confirm New Password</label>
                  <div className="input-wrapper">
                    <Lock className="input-icon" size={18} />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      className="form-input"
                      placeholder="Confirm new password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {message && (
              <div className={`message ${messageType}`}>
                {message}
              </div>
            )}

            <div className="button-group">
              <button 
                type="button"
                className="save-button"
                disabled={!canSave}
                onClick={handleSaveChanges}
              >
                Save Changes
              </button>
              <button type="button" className="cancel-button" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="modal-overlay" onClick={() => setShowSuccessModal(false)}>
          <div className="success-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="success-modal-icon">
              <CheckCircle size={48} />
            </div>
            <h3 className="success-modal-title">Profile Updated</h3>
            <p className="success-modal-message">
              Your profile has been updated successfully.
            </p>
            <button 
              className="success-modal-button"
              onClick={() => setShowSuccessModal(false)}
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
'use client';

import { User, Shield } from 'lucide-react';
import './role.css';
import Link from 'next/link';

export default function RoleSelectionPage() {
  return (
    <div className="role-page">
      <div className="role-container">
        <div className="role-header">
          <h1 className="role-title">Welcome to PathDev</h1>
          <p className="role-subtitle">Choose your role to continue</p>
        </div>

        <div className="role-grid">
          <Link href="/user/dashboard" className="role-card">
            <div className="role-icon role-icon-user">
              <User size={48} />
            </div>
            <h2 className="role-card-title">User</h2>
            <p className="role-card-description">
              Access your learning roadmaps and track your progress
            </p>
          </Link>

          <Link href="/admin/dashboard" className="role-card">
            <div className="role-icon role-icon-user">
              <Shield size={48} />
            </div>
            <h2 className="role-card-title">Admin</h2>
            <p className="role-card-description">
              Manage platform content and user activities
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
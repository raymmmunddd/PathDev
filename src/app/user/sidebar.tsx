'use client'

import { useState } from 'react'
import { LayoutDashboard, LogOut } from 'lucide-react'
import './sidebar.css'

interface SidebarProps {
  activePage?: string
}

export default function Sidebar({ activePage = 'dashboard' }: SidebarProps) {
  const [active, setActive] = useState(activePage)

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  ]

  const handleNavigation = (id: string, path: string) => {
    setActive(id)
    console.log(`Navigate to ${path}`)
  }

  const handleLogout = () => {
    if (confirm('Are you sure you want to log out?')) {
      console.log('Logging out...')
      window.location.href = '/auth'
    }
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="logo-icon">
            <span className="logo-beaker">{/* Logo */}</span>
          </div>
          <span className="logo-text">pathDev</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id, item.path)}
              className={`nav-item ${active === item.id ? 'active' : ''}`}
            >
              <Icon size={20} className="nav-icon" />
              <span className="nav-label">{item.label}</span>
            </button>
          )
        })}
      </nav>

      <div className="sidebar-footer">
        <button onClick={handleLogout} className="nav-item logout-btn">
          <LogOut size={20} className="nav-icon" />
          <span className="nav-label">Log out</span>
        </button>
      </div>
    </aside>
  )
}
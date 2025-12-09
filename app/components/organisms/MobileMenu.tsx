import { Menu, X } from 'lucide-react';
import SidebarButton from '../atoms/SidebarButton';
import SidebarIcon from '../atoms/SidebarIcon';
import { SIDEBAR_COLORS, SIDEBAR_TRANSITIONS } from '../sidebar/sidebar.styles';

interface MobileMenuProps {
  isCollapsed: boolean;
  onToggle: () => void;
  onOverlayClick: () => void;
}

export default function MobileMenu({ 
  isCollapsed, 
  onToggle, 
  onOverlayClick 
}: MobileMenuProps) {
  return (
    <>
      <style jsx>{`
        .mobile-menu-button {
          position: fixed;
          top: 1rem;
          z-index: 1001;
          background-color: rgba(${SIDEBAR_COLORS.bgSecondary}, 0.8);
          backdrop-filter: blur(8px);
          border: 1px solid ${SIDEBAR_COLORS.border};
          color: ${SIDEBAR_COLORS.textSecondary};
          padding: 0.75rem;
          border-radius: 0.5rem;
          cursor: pointer;
          display: none;
          align-items: center;
          justify-content: center;
          transition: all ${SIDEBAR_TRANSITIONS.base};
        }

        .mobile-menu-button.menu-right {
          right: 1rem;
        }

        .mobile-menu-button.menu-sidebar {
          left: calc(280px - 4rem);
        }

        .mobile-menu-button:hover {
          background-color: ${SIDEBAR_COLORS.bgCard};
          color: ${SIDEBAR_COLORS.textPrimary};
        }

        .sidebar-overlay {
          display: none;
          position: fixed;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 998;
          opacity: 0;
          pointer-events: none;
          transition: opacity ${SIDEBAR_TRANSITIONS.base};
        }

        .sidebar-overlay.active {
          opacity: 1;
          pointer-events: auto;
        }

        @media (max-width: 768px) {
          .mobile-menu-button {
            display: flex;
          }

          .sidebar-overlay {
            display: block;
          }
        }
      `}</style>
      
      <button 
        className={`mobile-menu-button ${!isCollapsed ? 'menu-sidebar' : 'menu-right'}`}
        onClick={onToggle}
        aria-label="Toggle menu"
      >
        <SidebarIcon Icon={!isCollapsed ? X : Menu} size={20} />
      </button>

      <div 
        className={`sidebar-overlay ${!isCollapsed ? 'active' : ''}`}
        onClick={onOverlayClick}
      />
    </>
  );
}
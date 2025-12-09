import { LogOut } from 'lucide-react';
import SidebarIcon from '../atoms/SidebarIcon';
import SidebarLabel from '../atoms/SidebarLabel';
import { SIDEBAR_COLORS, SIDEBAR_TRANSITIONS } from '../sidebar/sidebar.styles';

interface LogoutButtonProps {
  isCollapsed: boolean;
  onClick: () => void;
}

export default function LogoutButton({ isCollapsed, onClick }: LogoutButtonProps) {
  return (
    <>
      <style jsx>{`
        .logout-button {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          width: 100%;
          padding: 0.75rem 1rem;
          color: ${SIDEBAR_COLORS.textSecondary};
          background: transparent;
          border: none;
          border-radius: 0.75rem;
          transition: all ${SIDEBAR_TRANSITIONS.base};
          font-size: 0.9375rem;
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
        }

        .logout-button.collapsed {
          justify-content: center;
          padding: 0.75rem;
        }

        .logout-button:hover {
          background-color: ${SIDEBAR_COLORS.bgCard};
          color: ${SIDEBAR_COLORS.textPrimary};
        }
      `}</style>
      <button 
        className={`logout-button ${isCollapsed ? 'collapsed' : ''}`}
        onClick={onClick}
      >
        <SidebarIcon Icon={LogOut} size={30} />
      </button>
    </>
  );
}
import { SIDEBAR_COLORS, SIDEBAR_TRANSITIONS } from '../sidebar/sidebar.styles';

interface SidebarButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

export default function SidebarButton({ 
  children, 
  onClick, 
  className = '',
  ariaLabel 
}: SidebarButtonProps) {
  return (
    <>
      <style jsx>{`
        .sidebar-button {
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.5rem;
          transition: all ${SIDEBAR_TRANSITIONS.base};
          color: ${SIDEBAR_COLORS.textSecondary};
        }

        .sidebar-button:hover {
          background-color: ${SIDEBAR_COLORS.bgCard};
          color: ${SIDEBAR_COLORS.textPrimary};
        }
      `}</style>
      <button
        className={`sidebar-button ${className}`}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    </>
  );
}
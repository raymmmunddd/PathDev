import LogoWithText from '../molecules/LogoWithText';
import CollapseToggle from '../molecules/CollapseToggle';
import { SIDEBAR_COLORS, SIDEBAR_SIZES } from '../sidebar/sidebar.styles';

interface SidebarHeaderProps {
  isCollapsed: boolean;
  isMobile: boolean;
  onToggle: () => void;
  onLogoClick?: () => void;
}

export default function SidebarHeader({ 
  isCollapsed, 
  isMobile, 
  onToggle,
  onLogoClick 
}: SidebarHeaderProps) {
  return (
    <>
      <style jsx>{`
        .sidebar-header {
          display: flex;
          align-items: center;
          padding: 1.25rem 1rem;
          gap: 0.75rem;
          border-bottom: 1px solid ${SIDEBAR_COLORS.border};
          min-height: ${SIDEBAR_SIZES.headerHeight};
        }

        .sidebar-header.collapsed {
          justify-content: center;
          padding: 1.25rem 0.5rem;
        }

        @media (max-width: 768px) {
          .collapse-toggle {
            display: none;
          }
        }
      `}</style>
      <div className={`sidebar-header ${isCollapsed ? 'collapsed' : ''}`}>
        <LogoWithText isCollapsed={isCollapsed} onClick={onLogoClick} />
        {!isMobile && (
          <div className="collapse-toggle">
            <CollapseToggle isCollapsed={isCollapsed} onClick={onToggle} />
          </div>
        )}
      </div>
    </>
  );
}
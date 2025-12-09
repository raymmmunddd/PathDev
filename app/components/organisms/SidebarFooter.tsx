import LogoutButton from '../molecules/LogoutButton';
import { SIDEBAR_COLORS } from '../sidebar/sidebar.styles';

interface SidebarFooterProps {
  isCollapsed: boolean;
  onLogout: () => void;
}

export default function SidebarFooter({ isCollapsed, onLogout }: SidebarFooterProps) {
  return (
    <>
      <style jsx>{`
        .sidebar-footer {
          padding: 1rem;
          border-top: 1px solid ${SIDEBAR_COLORS.border};
        }
      `}</style>
      <div className="sidebar-footer">
        <LogoutButton isCollapsed={isCollapsed} onClick={onLogout} />
      </div>
    </>
  );
}
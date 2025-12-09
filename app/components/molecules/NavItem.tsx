import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import SidebarIcon from '../atoms/SidebarIcon';
import SidebarLabel from '../atoms/SidebarLabel';
import { SIDEBAR_COLORS, SIDEBAR_TRANSITIONS } from '../sidebar/sidebar.styles';

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
  isActive: boolean;
  isCollapsed: boolean;
  onClick?: () => void;
}

export default function NavItem({ 
  icon, 
  label, 
  href, 
  isActive, 
  isCollapsed,
  onClick 
}: NavItemProps) {
  return (
    <>
      <style jsx>{`
        .nav-link {
          display: flex;
          align-items: center;
          gap: 1.4rem;
          padding: 0.9rem 1.4rem;
          color: ${SIDEBAR_COLORS.textSecondary};
          text-decoration: none;
          border-radius: 0.75rem;
          transition: all ${SIDEBAR_TRANSITIONS.base};
          font-size: 1rem;
          font-weight: 600;
          white-space: nowrap;
          position: relative;
        }

        .nav-link.collapsed {
          justify-content: center;
          padding: 0.75rem;
        }

        .nav-link:hover {
          background-color: ${SIDEBAR_COLORS.bgCard};
          color: ${SIDEBAR_COLORS.textPrimary};
        }

        .nav-link.active {
          background-color: ${SIDEBAR_COLORS.bgCard};
          color: ${SIDEBAR_COLORS.primary};
        }

        /* Left accent indicator for active item - ALWAYS visible when active */
        .nav-link.active::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 70%;
          border-radius: 0 4px 4px 0;
          background: ${SIDEBAR_COLORS.primary};
        }

        /* Collapsed state: show indicator on the left edge */
        .nav-link.collapsed.active::before {
          left: 0;
          top: 50%;
          bottom: auto;
          transform: translateY(-50%);
          width: 4px;
          height: 70%;
          border-radius: 0 4px 4px 0;
        }
      `}</style>
      <Link
        href={href}
        className={`nav-link ${isActive ? 'active' : ''} ${isCollapsed ? 'collapsed' : ''}`}
        onClick={onClick}
      >
        <SidebarIcon Icon={icon} size={24} />
        <SidebarLabel isCollapsed={isCollapsed}>{label}</SidebarLabel>
      </Link>
    </>
  );
}
import Link from 'next/link';
import { SIDEBAR_COLORS, SIDEBAR_TRANSITIONS } from '../sidebar/sidebar.styles';

interface LogoWithTextProps {
  isCollapsed: boolean;
  onClick?: () => void;
}

export default function LogoWithText({ isCollapsed, onClick }: LogoWithTextProps) {
  return (
    <>
      <style jsx>{`
        .logo-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          transition: opacity ${SIDEBAR_TRANSITIONS.base};
          flex: 1;
        }

        .logo-link.collapsed {
          display: none;
        }

        .logo-text {
          font-size: 1.4rem;
          font-weight: 800;
          color: ${SIDEBAR_COLORS.primary};
          white-space: nowrap;
          opacity: 1;
          transition: opacity ${SIDEBAR_TRANSITIONS.fast};
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
      `}</style>
      <Link 
        href="/user/dashboard" 
        className={`logo-link ${isCollapsed ? 'collapsed' : ''}`}
        onClick={onClick}
      >
        <span className="logo-text">{"{pathdev}"}</span>
      </Link>
    </>
  );
}
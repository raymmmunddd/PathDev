'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Home, MessageSquare, Map, TrendingUp, Settings } from 'lucide-react';
import Swal from 'sweetalert2';

// Organisms
import SidebarHeader from '../organisms/SidebarHeader';
import SidebarNav from '../organisms/SidebarNav';
import SidebarFooter from '../organisms/SidebarFooter';
import MobileMenu from '../organisms/MobileMenu';

// Types & Constants
import { MenuItem } from '../organisms/SidebarNav';
import { 
  SIDEBAR_COLORS, 
  SIDEBAR_SIZES, 
  SIDEBAR_TRANSITIONS, 
  SIDEBAR_BREAKPOINTS 
} from './sidebar.styles';

interface SidebarProps {
  children: React.ReactNode;
}

const menuItems: MenuItem[] = [
  { icon: Home, label: 'Dashboard', href: '/user/dashboard' },
  { icon: Map, label: 'Roadmap', href: '/user/roadmap' },
  { icon: TrendingUp, label: 'Progress', href: '/user/progress' },
  { icon: MessageSquare, label: 'AI Chat', href: '/user/chat' },
  { icon: Settings, label: 'Profile', href: '/user/profile' },
];

export default function Sidebar({ children }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < SIDEBAR_BREAKPOINTS.mobile;
      setIsMobile(mobile);
      if (mobile) {
        setIsCollapsed(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: 'Logout Confirmation',
      text: 'Are you sure you want to logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: SIDEBAR_COLORS.primary,
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Yes, logout',
      cancelButtonText: 'Cancel',
      background: SIDEBAR_COLORS.bgSecondary,
      color: SIDEBAR_COLORS.textPrimary,
      customClass: {
        popup: 'swal-dark-popup',
        title: 'swal-dark-title',
        htmlContainer: 'swal-dark-text',
        confirmButton: 'swal-confirm-button',
        cancelButton: 'swal-cancel-button'
      }
    });

    if (result.isConfirmed) {
      try {
        Swal.fire({
          title: 'Logging out...',
          text: 'Please wait',
          allowOutsideClick: false,
          allowEscapeKey: false,
          showConfirmButton: false,
          background: SIDEBAR_COLORS.bgSecondary,
          color: SIDEBAR_COLORS.textPrimary,
          didOpen: () => {
            Swal.showLoading();
          }
        });
        
        await Swal.fire({
          title: 'Logged Out!',
          text: 'You have been successfully logged out.',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
          background: SIDEBAR_COLORS.bgSecondary,
          color: SIDEBAR_COLORS.textPrimary,
          customClass: {
            popup: 'swal-dark-popup'
          }
        });

        router.push('/');
      } catch (error) {
        console.error('Logout failed:', error);
        
        Swal.fire({
          title: 'Error!',
          text: 'Failed to logout. Please try again.',
          icon: 'error',
          confirmButtonColor: SIDEBAR_COLORS.primary,
          background: SIDEBAR_COLORS.bgSecondary,
          color: SIDEBAR_COLORS.textPrimary,
          customClass: {
            popup: 'swal-dark-popup',
            confirmButton: 'swal-confirm-button'
          }
        });
      }
    }
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLinkClick = () => {
    if (isMobile) {
      setIsCollapsed(true);
    }
  };

  const handleOverlayClick = () => {
    if (isMobile) {
      setIsCollapsed(true);
    }
  };

  return (
    <>
      <style jsx global>{`
        .sidebar-layout {
          display: flex;
          min-height: 100vh;
          background-color: ${SIDEBAR_COLORS.bgPrimary};
          position: relative;
        }

        .sidebar {
          background-color: ${SIDEBAR_COLORS.bgSecondary};
          border-right: 1px solid ${SIDEBAR_COLORS.border};
          transition: width ${SIDEBAR_TRANSITIONS.base};
          position: relative;
          display: flex;
          flex-direction: column;
          height: 100vh;
          position: sticky;
          top: 0;
          z-index: 100;
          overflow: hidden;
        }

        .sidebar.expanded {
          width: ${SIDEBAR_SIZES.expanded};
        }

        .sidebar.collapsed {
          width: ${SIDEBAR_SIZES.collapsed};
        }

        .sidebar.collapsed .logo-link {
          display: none !important;
        }

        .sidebar.expanded .logo-link {
          display: flex !important;
        }

        .main-content {
          flex: 1;
          min-width: 0;
        }

        .collapse-toggle {
          margin-left: auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Active nav link indicator */
        .nav-link.active {
          color: ${SIDEBAR_COLORS.primary};
          position: relative;
        }

        .nav-link:hover {
          color: ${SIDEBAR_COLORS.primary};
        }

        .nav-link.active::before {
          content: '';
          position: absolute;
          left: -3;
          top: 15%;
          transform: translateY(-50%);
          width: 4px;
          height: 200%;
          border-radius: 0 4px 4px 0;
          background: ${SIDEBAR_COLORS.primary};
        }

        /* SweetAlert2 Custom Styles */
        .swal-dark-popup {
          border: 1px solid ${SIDEBAR_COLORS.border} !important;
          border-radius: 1rem !important;
        }

        .swal-dark-title {
          font-weight: 600 !important;
          font-size: 1.5rem !important;
        }

        .swal-dark-text {
          color: ${SIDEBAR_COLORS.textSecondary} !important;
        }

        .swal-confirm-button {
          border-radius: 0.5rem !important;
          padding: 0.75rem 1.5rem !important;
          font-weight: 500 !important;
          transition: all ${SIDEBAR_TRANSITIONS.fast} !important;
        }

        .swal-confirm-button:hover {
          opacity: 0.9 !important;
          transform: translateY(-1px) !important;
        }

        .swal-cancel-button {
          border-radius: 0.5rem !important;
          padding: 0.75rem 1.5rem !important;
          font-weight: 500 !important;
          transition: all ${SIDEBAR_TRANSITIONS.fast} !important;
        }

        .swal-cancel-button:hover {
          opacity: 0.9 !important;
        }

        @media (max-width: ${SIDEBAR_BREAKPOINTS.mobile}px) {
          .sidebar {
            position: fixed;
            left: 0;
            top: 0;
            bottom: 0;
            z-index: 999;
            transform: translateX(-100%);
            transition: transform ${SIDEBAR_TRANSITIONS.base};
          }

          .sidebar.expanded {
            width: ${SIDEBAR_SIZES.mobile};
            transform: translateX(0);
          }

          .sidebar.collapsed {
            width: ${SIDEBAR_SIZES.mobile};
            transform: translateX(-100%);
          }

          .main-content {
            width: 100%;
          }
        }
      `}</style>

      <div className="sidebar-layout">
        <MobileMenu
          isCollapsed={isCollapsed}
          onToggle={toggleSidebar}
          onOverlayClick={handleOverlayClick}
        />

        <aside className={`sidebar ${isCollapsed ? 'collapsed' : 'expanded'}`}>
          <SidebarHeader
            isCollapsed={isCollapsed}
            isMobile={isMobile}
            onToggle={toggleSidebar}
            onLogoClick={handleLinkClick}
          />

          <SidebarNav
            menuItems={menuItems}
            currentPath={pathname}
            isCollapsed={isCollapsed}
            onItemClick={handleLinkClick}
          />

          <SidebarFooter
            isCollapsed={isCollapsed}
            onLogout={handleLogout}
          />
        </aside>

        <main className="main-content">{children}</main>
      </div>
    </>
  );
}
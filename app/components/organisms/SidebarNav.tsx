import { LucideIcon } from 'lucide-react';
import NavItem from '../molecules/NavItem';

export interface MenuItem {
  icon: LucideIcon;
  label: string;
  href: string;
}

interface SidebarNavProps {
  menuItems: MenuItem[];
  currentPath: string | null;
  isCollapsed: boolean;
  onItemClick?: () => void;
}

export default function SidebarNav({ 
  menuItems, 
  currentPath, 
  isCollapsed,
  onItemClick 
}: SidebarNavProps) {
  return (
    <>
      <style jsx>{`
        .sidebar-nav {
          flex: 1;
          padding: 1.5rem 0.75rem;
          overflow-y: auto;
        }

        .nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
      `}</style>
      <nav className="sidebar-nav">
        <ul className="nav-list">
          {menuItems.map((item) => {
            // Normalize paths by removing trailing slashes and query params
            const normalizedCurrentPath = (currentPath || '')
              .split('?')[0]
              .replace(/\/$/, '')
              .toLowerCase();
            
            const normalizedHref = item.href
              .replace(/\/$/, '')
              .toLowerCase();

            // Check if current path exactly matches or starts with the href
            const isActive = 
              normalizedCurrentPath === normalizedHref ||
              (normalizedHref !== '' && normalizedCurrentPath.startsWith(normalizedHref));

            return (
              <li key={item.href}>
                <NavItem
                  icon={item.icon}
                  label={item.label}
                  href={item.href}
                  isActive={isActive}
                  isCollapsed={isCollapsed}
                  onClick={onItemClick}
                />
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
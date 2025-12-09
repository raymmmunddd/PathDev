import { ChevronLeft, ChevronRight } from 'lucide-react';
import SidebarButton from '../atoms/SidebarButton';
import SidebarIcon from '../atoms/SidebarIcon';

interface CollapseToggleProps {
  isCollapsed: boolean;
  onClick: () => void;
}

export default function CollapseToggle({ isCollapsed, onClick }: CollapseToggleProps) {
  return (
    <SidebarButton
      onClick={onClick}
      ariaLabel={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      className="flex-shrink-0"
    >
      <SidebarIcon 
        Icon={isCollapsed ? ChevronRight : ChevronLeft} 
        size={20} 
      />
    </SidebarButton>
  );
}
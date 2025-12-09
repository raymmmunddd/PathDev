import { LucideIcon } from 'lucide-react';

interface SidebarIconProps {
  Icon: LucideIcon;
  size?: number;
  className?: string;
}

export default function SidebarIcon({ Icon, size = 20, className = '' }: SidebarIconProps) {
  const wrapperStyle: React.CSSProperties = {
    width: `${size + 8}px`,
    height: `${size + 8}px`,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  };

  return (
    <span className={className} style={wrapperStyle}>
      <Icon size={size} style={{ display: 'block' }} />
    </span>
  );
}
interface SidebarLabelProps {
  children: React.ReactNode;
  className?: string;
  isCollapsed?: boolean;
}

export default function SidebarLabel({ 
  children, 
  className = '', 
  isCollapsed = false 
}: SidebarLabelProps) {
  return (
    <span
      className={className}
      style={{
        whiteSpace: 'nowrap',
        display: 'inline-block',
        transition: 'opacity 200ms ease, width 200ms ease, transform 200ms ease',
        opacity: isCollapsed ? 0 : 1,
        width: isCollapsed ? 0 : 'auto',
        overflow: 'hidden',
        verticalAlign: 'middle',
        paddingBottom: isCollapsed ? 0 : '14px',
        paddingLeft: isCollapsed ? 0 : '8px',
        lineHeight: 1.1
      }}
    >
      {children}
    </span>
  );
}
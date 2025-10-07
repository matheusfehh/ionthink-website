'use client';

import * as React from "react";

interface DropdownMenuProps {
  children: React.ReactNode;
}

const DropdownMenu = ({ children }: DropdownMenuProps) => {
  const [open, setOpen] = React.useState(false);
  
  return (
    <div className="relative inline-block text-left">
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, { open, setOpen });
        }
        return child;
      })}
    </div>
  );
};

interface DropdownMenuTriggerProps {
  asChild?: boolean;
  children: React.ReactNode;
  open?: boolean;
  setOpen?: (open: boolean) => void;
}

const DropdownMenuTrigger = ({ asChild, children, open, setOpen }: DropdownMenuTriggerProps) => {
  const handleClick = () => {
    setOpen?.(!open);
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      onClick: handleClick
    });
  }

  return (
    <button onClick={handleClick}>
      {children}
    </button>
  );
};

interface DropdownMenuContentProps {
  align?: 'start' | 'center' | 'end';
  className?: string;
  children: React.ReactNode;
  open?: boolean;
  setOpen?: (open: boolean) => void;
}

const DropdownMenuContent = ({ align = 'start', className = '', children, open, setOpen }: DropdownMenuContentProps) => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen?.(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, setOpen]);

  if (!open) return null;

  const alignmentClasses = {
    start: 'left-0',
    center: 'left-1/2 -translate-x-1/2',
    end: 'right-0'
  };

  return (
    <div
      ref={ref}
      className={`absolute z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md ${alignmentClasses[align]} ${className}`}
    >
      {children}
    </div>
  );
};

interface DropdownMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const DropdownMenuItem = ({ className = '', children, onClick, ...props }: DropdownMenuItemProps) => {
  return (
    <div
      className={`relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem };


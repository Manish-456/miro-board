"use client";

import React from 'react';
import { LucideIcon } from 'lucide-react';

import { Hint } from '@/components/hint';
import { Button } from '@/components/ui/button';


interface ToolButtonProps {
    label: string;
    icon: LucideIcon;
    onClick: () => void;
    isActive? : boolean;
    isDisabled? : boolean;
}

export function ToolButton({
    label,
    icon: Icon,
    onClick,
    isActive,
    isDisabled
}: ToolButtonProps) {
    
  return (
    <Hint label={label} sideOffset={14} side='right'>
      <Button
      disabled={isDisabled}
      onClick={onClick}
      size={"icon"}
      variant={isActive ? "boardActive": "board"}
      >
        <Icon />
      </Button>
    </Hint>
  )
}

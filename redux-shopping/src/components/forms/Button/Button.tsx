import { ReactNode } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/classNameUtil';

const ButtonVariants = cva(`font-medium px-5 py-2.5 rounded-lg`, {
  variants: {
    variant: {
      default: '',
      outline: '',
    },
    color: {
      primary: '',
      secondary: '',
    },
    wFull: {
      true: 'w-full',
    },
    disabled: {
      true: 'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-500',
    },
  },
  compoundVariants: [
    { variant: 'default', color: 'primary', class: 'text-white bg-indigo-700 hover:bg-indigo-800' },
    {
      variant: 'default',
      color: 'secondary',
      class: 'text-white bg-red-700 hover:bg-red-800',
    },
    {
      variant: 'outline',
      color: 'primary',
      class:
        'text-indigo-700 bg-transparent border border-indigo-700 hover:bg-indigo-700 hover:text-white',
    },
    {
      variant: 'outline',
      color: 'secondary',
      class: 'text-red-700 bg-transparent border border-red-700 hover:bg-red-700 hover:text-white',
    },
  ],
  defaultVariants: {
    variant: 'default',
    color: 'primary',
  },
});

interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
  variant?: 'default' | 'outline';
  color?: 'primary' | 'secondary';
  wFull?: boolean;
}

export default function Button({
  children,
  type = 'button',
  onClick,
  variant,
  color,
  wFull,
  disabled,
}: ButtonProps) {
  return (
    <button
      className={cn(ButtonVariants({ variant, color, wFull, disabled }))}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}


import React from 'react';
import { cn } from '../lib/utils';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

interface RefinedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const RefinedButton: React.FC<RefinedButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  children,
  ...props
}) => {
  const baseStyle = 'rounded-full font-medium transition-all duration-300 flex items-center justify-center';
  
  const variantStyles = {
    primary: 'bg-tripadvisor-green text-white hover:bg-tripadvisor-darkGreen',
    secondary: 'bg-white text-tripadvisor-black border border-gray-300 hover:bg-gray-50',
    outline: 'bg-transparent text-tripadvisor-green border border-tripadvisor-green hover:bg-tripadvisor-green/10',
    ghost: 'bg-transparent text-tripadvisor-black hover:bg-gray-100'
  };
  
  const sizeStyles = {
    sm: 'text-xs px-4 py-1.5',
    md: 'text-sm px-6 py-2',
    lg: 'text-base px-8 py-3'
  };
  
  const widthStyle = fullWidth ? 'w-full' : '';
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }} 
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <Button
        className={cn(
          baseStyle,
          variantStyles[variant],
          sizeStyles[size],
          widthStyle,
          className
        )}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
};

export default RefinedButton;

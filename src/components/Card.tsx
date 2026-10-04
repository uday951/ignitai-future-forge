import React from 'react';
import { motion } from 'framer-motion';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  ...props
}) => {
  return (
    <div
      className={`rounded-2xl border border-[#E8E4DE] bg-white p-7 sm:p-8 transition-all duration-200 ${
        hoverEffect
          ? 'hover:-translate-y-1 hover:border-[#FF4D1C] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]'
          : 'shadow-[0_2px_10px_rgba(0,0,0,0.02)]'
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'darkOutline';
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  href,
  isExternal,
  children,
  className = '',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold tracking-normal transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4D1C] focus-visible:ring-offset-2';

  const variants = {
    primary:
      'bg-[#111111] text-white hover:bg-[#FF4D1C] hover:-translate-y-0.5 shadow-sm hover:shadow-md',
    secondary:
      'bg-white/80 hover:bg-white text-[#111111] border border-[#E8E4DE] hover:border-[#111111] hover:-translate-y-0.5 shadow-[0_1px_2px_rgba(0,0,0,0.02)]',
    outline:
      'bg-transparent hover:bg-white text-[#111111] border border-[#E8E4DE] hover:border-[#FF4D1C] hover:-translate-y-0.5',
    darkOutline:
      'bg-transparent hover:bg-white/10 text-white border border-white/20 hover:border-white hover:-translate-y-0.5',
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;

import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface PremiumCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

const PremiumCard = forwardRef<HTMLDivElement, PremiumCardProps>(
  ({ className, hover = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-white/80 dark:bg-premium-950/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-gray-800/50 p-8 transition-all duration-300',
          hover && 'hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 hover:bg-white/90 dark:hover:bg-premium-950/90',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

PremiumCard.displayName = 'PremiumCard';

export default PremiumCard;

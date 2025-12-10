import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface CurvedSectionProps extends HTMLAttributes<HTMLElement> {
  curveTop?: 'wave' | 'tilt' | 'curve' | 'none';
  curveBottom?: 'wave' | 'tilt' | 'curve' | 'none';
  bgColor?: string;
}

const CurvedSection = forwardRef<HTMLElement, CurvedSectionProps>(
  ({ className, curveTop = 'none', curveBottom = 'none', bgColor = 'bg-white dark:bg-premium-900', children, ...props }, ref) => {
    const curves = {
      wave: 'M0 0C240 80 480 120 720 120C960 120 1200 80 1440 0V120H0V0Z',
      tilt: 'M0 0L1440 80V120H0V0Z',
      curve: 'M0 0Q360 120 720 60T1440 0V120H0V0Z'
    };

    const curvesBottom = {
      wave: 'M0 120C240 40 480 0 720 0C960 0 1200 40 1440 120V0H0V120Z',
      tilt: 'M0 120L1440 40V0H0V120Z',
      curve: 'M0 120Q360 0 720 60T1440 120V0H0V120Z'
    };

    return (
      <section ref={ref} className={cn('relative', className)} {...props}>
        {curveTop !== 'none' && (
          <div className="absolute top-0 left-0 right-0 h-24 md:h-32 -mt-24 md:-mt-32 overflow-hidden">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
              <path d={curves[curveTop]} className={cn('fill-current', bgColor.replace('bg-', 'text-'))} />
            </svg>
          </div>
        )}
        
        <div className={cn('py-20 md:py-32', bgColor)}>
          {children}
        </div>
        
        {curveBottom !== 'none' && (
          <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 -mb-24 md:-mb-32 overflow-hidden">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
              <path d={curvesBottom[curveBottom]} className={cn('fill-current', bgColor.replace('bg-', 'text-'))} />
            </svg>
          </div>
        )}
      </section>
    );
  }
);

CurvedSection.displayName = 'CurvedSection';

export default CurvedSection;

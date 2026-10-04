import React from 'react';

interface SectionLabelProps {
  label: string;
  className?: string;
  dotColor?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  label,
  className = '',
  dotColor = 'bg-[#FF4D1C]',
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[#6B6B6B] mb-4 ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
};

export default SectionLabel;

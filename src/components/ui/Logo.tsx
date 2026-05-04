import React from 'react';
import { cn } from '../../lib/utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className, showText = true }) => {
  return (
    <div className={cn("flex items-center gap-4 group", className)}>
      <div className="relative w-14 h-14 flex items-center justify-center">
        {/* The user provided logo image */}
        <img 
          src="/logo.png" 
          alt="أساس الدقة" 
          className="w-full h-full object-contain"
          onError={(e) => {
            // Fallback to SVG if image is not found
            e.currentTarget.style.display = 'none';
            const fallback = e.currentTarget.parentElement?.querySelector('.logo-fallback');
            if (fallback) (fallback as HTMLElement).style.display = 'flex';
          }}
        />
        
        {/* SVG Fallback (hidden by default if image loads) */}
        <div className="logo-fallback hidden w-full h-full items-center justify-center">
          <svg
            viewBox="0 0 100 120"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f2ca50" />
                <stop offset="50%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#b8860b" />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="font-serif font-bold italic"
              fill="url(#gold-gradient)"
              fontSize="70"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              AS
            </text>
          </svg>
        </div>
      </div>

      {showText && (
        <div className="flex flex-col text-right">
          <div className="flex items-center gap-1 justify-end">
            <span className="text-xl font-bold tracking-tight text-on-surface bg-linear-to-r from-primary to-primary-container bg-clip-text text-transparent">
              أساس
            </span>
            <span className="text-xl font-bold tracking-tight text-on-surface">
              الدقة
            </span>
          </div>
          <span className="text-[10px] tracking-[0.3em] text-primary uppercase font-bold text-right">
            للإستشارات المالية
          </span>
        </div>
      )}
    </div>
  );
};

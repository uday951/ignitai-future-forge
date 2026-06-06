import React, { useEffect, useState } from 'react';
import { GA_MEASUREMENT_ID } from '@/lib/analytics';
import { Activity, ShieldAlert, CheckCircle, Info } from 'lucide-react';

export const AnalyticsStatus = () => {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);
  const isDev = import.meta.env.DEV;

  useEffect(() => {
    // Check if gtag loaded successfully after a small delay
    const checkConnection = () => {
      if (typeof window !== 'undefined' && window.gtag && window.dataLayer) {
        setIsConnected(true);
      } else {
        setIsConnected(false);
      }
    };

    const timer = setTimeout(checkConnection, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-xs font-mono text-slate-400 space-y-2 mt-4 max-w-sm">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <span className="font-bold flex items-center gap-1.5 text-slate-200">
          <Activity className="w-4 h-4 text-blue-400" />
          Analytics Console
        </span>
        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
          isDev ? 'bg-amber-950/40 text-amber-400 border border-amber-900/50' : 'bg-blue-950/40 text-blue-450 border border-blue-900/50'
        }`}>
          {isDev ? 'Development' : 'Production'}
        </span>
      </div>

      <div className="space-y-1.5">
        <div className="flex justify-between items-center">
          <span>Measurement ID:</span>
          <span className="text-slate-200 font-semibold">{GA_MEASUREMENT_ID}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span>Script Status:</span>
          {isConnected === null ? (
            <span className="text-slate-500">Checking...</span>
          ) : isConnected ? (
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5 shrink-0" />
              Connected
            </span>
          ) : (
            <span className="text-rose-400 font-semibold flex items-center gap-1">
              <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
              Blocked / Fails
            </span>
          )}
        </div>
      </div>

      {isConnected === false && (
        <div className="text-[10px] text-slate-500 border-t border-slate-800 pt-2 flex gap-1 items-start leading-relaxed">
          <Info className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
          <span>If blocked, check your ad blocker settings or browser privacy filters to ensure Gtag script runs locally.</span>
        </div>
      )}
    </div>
  );
};

export default AnalyticsStatus;

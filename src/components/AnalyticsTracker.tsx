import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, initGA } from '@/lib/analytics';

export const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Make sure dataLayer and gtag exist on window mount
    initGA();
  }, []);

  useEffect(() => {
    // Fires page tracking manually on route modifications
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
};

export default AnalyticsTracker;

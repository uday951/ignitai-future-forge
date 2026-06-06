export const GA_MEASUREMENT_ID = 'G-23ZEBTSTWG';

// Check if we are running in dev mode
const isDev = import.meta.env.DEV;

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Log GA events in development for verification
const logDev = (message: string, data?: any) => {
  if (isDev) {
    console.log(`%c[Google Analytics 4]%c ${message}`, 'color: #3b82f6; font-weight: bold;', '', data || '');
  }
};

export const initGA = () => {
  if (typeof window === 'undefined') return;
  
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
  }
  
  logDev('Stub initialized');
};

export const trackPageView = (path: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  try {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: path,
    });
    logDev(`PageView Tracked: ${path}`);
  } catch (error) {
    console.error('[Google Analytics] PageView error:', error);
  }
};

export const trackEvent = (action: string, params?: Record<string, any>) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  try {
    window.gtag('event', action, params);
    logDev(`Event Tracked: ${action}`, params);
  } catch (error) {
    console.error('[Google Analytics] Event tracking error:', error);
  }
};

export const trackApplyClick = (jobTitle: string, company: string, url: string) => {
  trackEvent('apply_now_click', {
    job_title: jobTitle,
    company_name: company,
    destination_url: url
  });
};

export const trackContactForm = (formType: string) => {
  trackEvent('contact_form_submit', {
    form_type: formType
  });
};

export const trackSearch = (query: string, resultsCount: number) => {
  trackEvent('search', {
    search_term: query,
    results_count: resultsCount
  });
};

export const trackExternalLink = (url: string, linkText: string) => {
  trackEvent('external_link_click', {
    destination_url: url,
    link_text: linkText
  });
};
